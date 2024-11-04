import { TextBoxProps } from "./text-components/TextBox";

export enum SlideType {
  TEXT_IMAGE = "TEXT_IMAGE",
  IMAGE_FULLSCREEN = "IMAGE_FULLSCREEN",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
  PODCAST = "PODCAST",
  AD = "AD",
  AD_COMPLEX = "AD_COMPLEX",
}

export interface SlideData {
  duration: number;
  isSlideType(type: SlideType): boolean;
  setDuration(duration: number): void;
}

export class ImageSlideData implements SlideData {
  url: string;
  duration: number;
  constructor(url: string, duration: number) {
    this.url = url;
    this.duration = duration || 5;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.IMAGE;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export class TextSlideData implements SlideData {
  title: string;
  description: string;
  url: string;
  textsize: string;
  duration: number;
  constructor(
    title: string,
    description: string,
    duration: number,
    url?: string,
    textsize?: string
  ) {
    this.title = title;
    this.description = description;
    this.duration = duration || 5;
    this.url = url || "";
    this.textsize = textsize || "2xl";
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.TEXT;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export class FullScreenImageSlideData implements SlideData {
  url: string;
  title: string;
  duration: number;
  constructor(url: string, title: string, duration: number) {
    this.url = url;
    this.title = title;
    this.duration = duration || 5;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.IMAGE_FULLSCREEN;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export class FullScreenImageWithTextSlideData implements SlideData {
  url: string;
  title: string;
  description: string;
  textsize: TextBoxProps["textsize"];
  boxposition: TextBoxProps["position"];
  duration: number;
  constructor(
    url: string,
    title: string,
    description: string,
    duration: number,
    textsize?: TextBoxProps["textsize"],
    boxposition?: TextBoxProps["position"]
  ) {
    this.url = url;
    this.title = title;
    this.description = description;
    this.duration = duration || 5;
    this.textsize = textsize || "2xl";
    this.boxposition = boxposition || "center";
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.TEXT_IMAGE;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}
export class VideoSlideData implements SlideData {
  url: string;
  title: string;
  description: string;
  textsize: TextBoxProps["textsize"];
  boxposition: TextBoxProps["position"];
  duration: number;
  constructor(
    url: string,
    title: string,
    description: string,
    duration: number,
    textsize?: TextBoxProps["textsize"],
    boxposition?: TextBoxProps["position"]
  ) {
    this.url = url;
    this.title = title;
    this.description = description;
    this.duration = duration || 5;
    this.textsize = textsize || "2xl";
    this.boxposition = boxposition || "center";
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.VIDEO;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export class PodcastSlideData implements SlideData {
  title: string;
  text: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
  constructor(
    title: string,
    text: string,
    imageUrl: string,
    audioUrl: string,
    duration: number
  ) {
    this.title = title;
    this.text = text;
    this.imageUrl = imageUrl;
    this.audioUrl = audioUrl;
    this.duration = duration || 30;
  }

  isSlideType(type: SlideType): boolean {
    return type === SlideType.PODCAST;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export class AdSlideData implements SlideData {
  url: string;
  imageUrl?: string;
  images?: string[];
  title: string;
  description: string;
  duration: number;

  constructor(
    url: string,
    title: string,
    description: string,
    imageUrl?: string,
    images?: string[],
    duration?: number
  ) {
    this.url = url;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.images = images;
    this.duration = duration || 5;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.AD;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export class ComplexAdSlideData implements SlideData {
  url: string;
  title?: string;
  description?: string;
  images: string[];
  text: string[];
  duration: number;

  constructor(
    url: string,
    title: string,
    description: string,
    images: string[],
    text: string[],
    duration?: number
  ) {
    this.url = url;
    this.images = images;
    this.title = title;
    this.description = description;
    this.text = text;
    this.duration = duration || 5;
  }

  isSlideType(type: SlideType): boolean {
    return type === SlideType.AD_COMPLEX;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export class TyleSlideData implements SlideData {
  url: string;
  title: string;
  imageUrl: string;
  duration: number;
  constructor(title: string, imageUrl: string, duration: number) {
    this.url = imageUrl || "";
    this.title = title || "";
    this.imageUrl = imageUrl;
    this.duration = duration;
  }
  isSlideType(type: SlideType): boolean {
    return type === SlideType.IMAGE_FULLSCREEN;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}

export interface Short {
  id: number;
  artikelLink: string;
  id: number;
  slides: SlideData[];
}

export interface SlideItem {
  id: number;
  artikelLink: string;
  slides: {
    duration: number;
    type: SlideType;
    title: string;
    description: string;
    text: string[];
    url: string;
    audioUrl: string;
    imageUrl: string;
    images: string[];
    textsize: string;
    boxposition: string;
  }[];
}
