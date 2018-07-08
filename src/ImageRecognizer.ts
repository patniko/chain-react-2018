import { TfImageRecognition } from 'react-native-tensorflow';

export default class ImageRecognizer
{
  recognizer: TfImageRecognition;
  constructor(options)
  {
    this.recognizer = new TfImageRecognition(options);
  }

  async recognize(data)
  {
    return await this.recognizer.recognize(data);
  }
}