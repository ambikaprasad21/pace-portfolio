import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="9"
          aria-label="Slide 10"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="10"
          aria-label="Slide 11"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/images/p1.png"
            alt="Slide 1"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p2.png"
            alt="Slide 2"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p3.png"
            alt="Slide 3"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p4.png"
            alt="Slide 4"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p5.png"
            alt="Slide 5"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p6.png"
            alt="Slide 6"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p7.png"
            alt="Slide 7"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p8.png"
            alt="Slide 8"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p9.png"
            alt="Slide 9"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p10.png"
            alt="Slide 10"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/p11.png"
            alt="Slide 11"
            width={800}
            height={400}
            className="d-block w-100"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
