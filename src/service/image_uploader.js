class ImageUploader {
  async upload(file) {
    const data = new FormData();
    
    data.append("file", file);
    data.append("upload_preset", "bb5grij6");
    const url = 'https://api.cloudinary.com/v1_1/dbhycuvia/image/upload';
    const result = await fetch(
      url, {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;