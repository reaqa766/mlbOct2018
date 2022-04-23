import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective {

  @Input() appImgFallback: string;

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    element.src = this.appImgFallback || 'https://firebasestorage.googleapis.com/v0/b/mlb2019-86c7e.appspot.com/o/player-placeholder.jpg?alt=media&token=539ebe1e-0249-43ae-8b23-2909fcabbf84';
  }

}
