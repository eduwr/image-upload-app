const { Schema, model } = require('mongoose');
const { S3 } = require('aws-sdk');
const { unlink } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');

const s3 = new S3();

const PostSchema = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.pre('save', function handleURL() {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}-${this.name}`;
  }
});

PostSchema.pre('remove', function handleDeleteFile() {
  if (process.env.STORAGE_TYPE === 's3') {
    return s3
      .deleteObject({
        Bucket: 'uploadexample2',
        Key: this.key,
      })
      .promise();
  }
  const filePath = resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key);
  return promisify(unlink)(filePath);
});

module.exports = model('Post', PostSchema);
