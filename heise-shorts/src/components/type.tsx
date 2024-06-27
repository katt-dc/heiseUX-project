export enum SlideType {
  TEXT_IMAGE = "TEXT_IMAGE",
  IMAGE_FULLSCREEN = "IMAGE_FULLSCREEN",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
  PODCAST = "PODCAST",
  AD = "AD"
}

export interface SlideData {
  isSlideType(type: SlideType): boolean;
}

export class ImageSlideData implements SlideData {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.IMAGE;
  }
}

export class TextSlideData implements SlideData {
  title: string;
  description: string;
  url: string;
  constructor(title: string, description: string, url?: string) {
    this.title = title;
    this.description = description;
    this.url = url || "";
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.TEXT;
  }
}

export class FullScreenImageSlideData implements SlideData {
  url: string;
  title: string;
  constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.IMAGE_FULLSCREEN;
  }
}

export class FullScreenImageWithTextSlideData implements SlideData {
  url: string;
  title: string;
  description: string;
  constructor(url: string, title: string, description: string) {
    this.url = url;
    this.title = title;
    this.description = description;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.TEXT_IMAGE;
  }
}

export class VideoSlideData implements SlideData {
  url: string;
  description?: string;
  constructor(url: string, description?: string) {
    this.url = url;
    this.description = description;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.VIDEO;
  }
}



export class PodcastSlideData implements SlideData {
  headline: string;
  text: string;
  imageUrl: string;
  audioUrl: string;

  constructor(headline: string, text: string, imageUrl: string, audioUrl: string) {
    this.headline = headline;
    this.text = text;
    this.imageUrl = imageUrl;
    this.audioUrl = audioUrl;
  }
  
  isSlideType(type: SlideType): boolean {
    return type === SlideType.PODCAST;
  }
}

export class AdSlideData implements SlideData {
  url: string;
  imageUrl: string;

  constructor(url: string, imageUrl: string) {
    this.url = url;
    this.imageUrl = imageUrl;
  }

  isSlideType(type: SlideType): boolean {
    return type === SlideType.AD;
  }
}

export interface Short {
  artikelLink: string;
  slides: SlideData[];
}

export interface SlideItem {
  id: number;
  artikelLink: string;
  slides: {
    type: SlideType;
    title: string;
    description: string;
    url: string;
    audioUrl: string;
    imageUrl: string;
  }[];
}

