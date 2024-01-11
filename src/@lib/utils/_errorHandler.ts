import { imagePaths } from '@lib/constant/_imagePaths';

export const onImageLoadError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const imgElement = event.currentTarget;
  imgElement.src = imagePaths.placeHolder;
  imgElement.alt = 'Image not available';
};
