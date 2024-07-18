export enum SlideType {
  TEXT_IMAGE = "TEXT_IMAGE",
  IMAGE_FULLSCREEN = "IMAGE_FULLSCREEN",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
  PODCAST = "PODCAST",
  AD = "AD",
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
  textsize: string;
  constructor(
    title: string,
    description: string,
    url?: string,
    textsize?: string
  ) {
    this.title = title;
    this.description = description;
    this.url = url || "";
    this.textsize = textsize || "base";
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
  textsize: string;
  boxposition: string;
  constructor(
    url: string,
    title: string,
    description: string,
    textsize: string,
    boxposition: string
  ) {
    this.url = url;
    this.title = title;
    this.description = description;
    this.textsize = textsize || "base";
    this.boxposition = boxposition || "center";
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.TEXT_IMAGE;
  }
}

export class VideoSlideData implements SlideData {
  url: string;
  title: string;
  description: string;
  textsize: string;
  boxposition: string;
  constructor(
    url: string,
    title: string,
    description: string,
    textsize: string,
    boxposition: string
  ) {
    this.url = url;
    this.title = title;
    this.description = description;
    this.textsize = textsize || "base";
    this.boxposition = boxposition || "center";
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.VIDEO;
  }
}

export class PodcastSlideData implements SlideData {
  title: string;
  text: string;
  imageUrl: string;
  audioUrl: string;

  constructor(
    title: string,
    text: string,
    imageUrl: string,
    audioUrl: string
  ) {
    this.title = title;
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
export class TyleSlideData implements SlideData {
  url: string;
  title: string;
  imageUrl: string;
  constructor(
    url: string, 
    title: string,
    imageUrl: string
  ) {
    this.url = imageUrl || "";
    this.title = title || "" ;
    this.imageUrl = imageUrl;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.IMAGE_FULLSCREEN;
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
    textsize: string;
    boxposition: string;
  }[];
}
