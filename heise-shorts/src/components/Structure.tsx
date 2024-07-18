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
} from "./type";
import jsonData from "../data.json";

function convertJsonToStructure(jsonData: SlideItem[]): Short[] {
  return jsonData.map((item: SlideItem) => {
    const slides: SlideData[] = item.slides.map((slide) => {
      switch (slide.type) {
        case SlideType.TEXT_IMAGE:
          return new FullScreenImageWithTextSlideData(
            slide.url,
            slide.title,
            slide.description,
            slide.textsize,
            slide.boxposition
          );
        case SlideType.IMAGE_FULLSCREEN:
          return new FullScreenImageSlideData(slide.url, slide.title);
        case SlideType.IMAGE:
          return new ImageSlideData(slide.url);
        case SlideType.TEXT:
          return new TextSlideData(
            slide.title,
            slide.description,
            slide.url,
            slide.textsize
          );
        case SlideType.VIDEO:
          return new VideoSlideData(
            slide.url,
            slide.title,
            slide.description,
            slide.textsize,
            slide.boxposition
          );
        case SlideType.PODCAST:
          return new PodcastSlideData(
            slide.title,
            slide.description,
            slide.imageUrl,
            slide.audioUrl
          );
        case SlideType.AD:
          return new AdSlideData(slide.url, slide.imageUrl);
        default:
          throw new Error(`Unbekannter Slide-Typ: ${slide.type}`);
      }
    });
    return {
      artikelLink: item.artikelLink,
      id: item.id,
      slides: slides
    };
  });
}

// Konvertierte Daten
export const Structure: Short[] = convertJsonToStructure(jsonData);
