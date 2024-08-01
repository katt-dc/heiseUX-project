import {
  AdSlideData,
  FullScreenImageSlideData,
  FullScreenImageWithTextSlideData,
  ImageSlideData,
  PodcastSlideData,
  Short,
  SlideData,
  SlideItem,
  TextSlideData,
  VideoSlideData,
  SlideType,
  ComplexAdSlideData,
} from "./type";
import jsonData from "../data.json";
import { TextBoxProps } from "./text-components/TextBox";

function convertJsonToStructure(jsonData: SlideItem[]): Short[] {
  return jsonData.map((item: SlideItem) => {
    const slides: SlideData[] = item.slides.map((slide) => {
      switch (slide.type) {
        case SlideType.TEXT_IMAGE:
          return new FullScreenImageWithTextSlideData(
            slide.url,
            slide.title,
            slide.description,
            slide.duration,
            slide.textsize as TextBoxProps["textsize"],
            slide.boxposition as TextBoxProps["position"],
          );
        case SlideType.IMAGE_FULLSCREEN:
          return new FullScreenImageSlideData(slide.url, slide.title, slide.duration);
        case SlideType.IMAGE:
          return new ImageSlideData(slide.url, slide.duration);
        case SlideType.TEXT:
          return new TextSlideData(
            slide.title,
            slide.description,
            slide.duration,
            slide.url,
            slide.textsize,
          );
        case SlideType.VIDEO:
          return new VideoSlideData(
            slide.url,
            slide.title,
            slide.description,
            slide.duration,
            slide.textsize as TextBoxProps["textsize"],
            slide.boxposition as TextBoxProps["position"]
          );
        case SlideType.PODCAST:
          return new PodcastSlideData(
            slide.title,
            slide.description,
            slide.imageUrl,
            slide.audioUrl,
            slide.duration
          );
        case SlideType.AD:
          return new AdSlideData(
            slide.url,
            slide.title,
            slide.description,
            slide.imageUrl,
            slide.images,
            slide.duration
          );
        case SlideType.AD_COMPLEX:
          return new ComplexAdSlideData(
            slide.url,
            slide.title,
            slide.description,
            slide.images,
            slide.text,
            slide.duration
          );
        default:
          throw new Error(`Unbekannter Slide-Typ: ${slide.type}`);
      }
    });
    return {
      artikelLink: item.artikelLink,
      id: item.id,
      slides: slides,
    };
  });
}

// Konvertierte Daten
export const Structure: Short[] = convertJsonToStructure(jsonData);
