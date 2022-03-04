import { Carousel } from 'antd';
import 'antd/dist/antd.css';


export default function CarouselComponent() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay dotPosition="left">
      <div>
        <img
          src='https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
          className="w-full h-96 object-fill"
        />
      </div>
      <div>
        <img
          src='https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
          className="w-full h-96 object-fill"
        />
      </div>
      <div>
        <img
          src='https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
          className="w-full h-96 object-fill"
        />
      </div>
      <div>
        <img
          src='https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
          className="w-full h-96 object-fill"
        />
      </div>
    </Carousel>
  );
}
