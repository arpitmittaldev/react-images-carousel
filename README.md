# react-images-carousel

Responsive, lightweight and mobile-first images carousel component for all React apps.

### Specifications

-   Responsive
-   Mobile first
-   Liteweight
-   Pagination dots
-   Slide Transition
-   Infinite loop
-   Works best with the same size images

### Installing as a package

`npm install react-images-carousel`

### Usage

```javascript
import React from 'react';
import ReactImagesCarousel from 'react-images-carousel';

export default function Home() {

    const sliderData = [
        "https://images.unsplash.com/photo-1608447714925-599deeb5a682?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750", 
        "https://images.unsplash.com/photo-1504610926078-a1611febcad3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750", 
        "https://images.unsplash.com/photo-1419225692236-28f3211d7038?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750",
        "https://images.unsplash.com/photo-1515446870326-c532f9a8d954?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750", 
        "https://images.unsplash.com/photo-1545091741-2231068f3478?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750",    
    ];

    return (<div>
        <ReactImagesCarousel images={sliderData} sliderBg="#000" paginationBg="#000000"/>
    </div>
    )
}


```

### Props

| Name                                     | Value                        | Description                                                                                                                                                                                                           |
| ---------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| images                                     | `array` | Images array for showing in the carousel |
| sliderBg                                | `string`                    | Background color of the carousel, defaults to '#000000'|
| paginationBg                                | `string`                    | Background color of the navigaton bar, defaults to '#000000'|

### Credits

Demo Image credits to Unsplash.

```

```
