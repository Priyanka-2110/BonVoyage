import { Directive,HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGallery]'
})
export class GalleryDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  /*@HostListener('click')
  imageChange() {
    var src: any = this.elementRef.nativeElement.src
    var prev: any = document.getElementById("preview")
    prev.src = src
    var imageSlide = document.getElementsByClassName("img-slide")
    for(let i=0; i<imageSlide.length; i++){
      imageSlide[i].classList.remove("active")
    }
    this.elementRef.nativeElement.parentElement.classList.add("active")
  }*/

  @HostListener('click')
  imageChange() {
    const src: string = this.elementRef.nativeElement.querySelector('img').src;
    const prev: HTMLImageElement = document.getElementById("preview") as HTMLImageElement;
    prev.src = src;
    const imageSlides = document.getElementsByClassName("img-slide");
    for (let i = 0; i < imageSlides.length; i++) {
      this.renderer.removeClass(imageSlides[i], "active");
    }
    this.renderer.addClass(this.elementRef.nativeElement, "active");
  }
}
