import { useEffect, useState } from "react";
import Image from 'next/image'

type Props = {
  "data-src": string
}

type ogDataType = {
  "title": string,
  "description": string,
  "image": string,
}

export const CustomCard= (props: Props) => {
  const dataSrc = props['data-src']
  
  const [data, setData] = useState<ogDataType>({title: "null", description: "null", image: "null"});
  const [isloaded ,setIsLoaded] = useState<boolean>(false);
  const ImageHandler = (src: string) => {
    if(src === "null" || src === undefined){
      return "https://images.dog.ceo/breeds/terrier-border/n02093754_5594.jpg"
    }else{
      return src;
    }
  } 

  useEffect(() => {
    const url = new URL("http://localhost:3000/api/card")
    url.searchParams.set("url", dataSrc);
    try {
      fetch(url.toString()).then(res => res.json()).then(data => setData(data));
      setIsLoaded(true);
    }catch{
      throw new Error("Failed to Fetch");
    }
  }, [dataSrc])
  return(
    <>
      {isloaded &&
      <div className="py-2">
        <div className="card card-side no-underline rounded-md border border-slate-400 dark:border-slate-100 bg-slate-200 dark:bg-stone-800">
        <figure className="max-w-[256px]">{data['image'] && <img className="w-32 md:w-64"src={(ImageHandler(data['image']))} alt="Site Image"/>}</figure>
          <div className="card-body mx-2 text-xs">
            <div className="text-2xl mb-auto pb-4">{data['title']}</div>
            <span className="overflow-hidden">{data['description']}</span>
            <cite className="align-bottom text-right mt-auto mr-2 my-2 text-2xs">{dataSrc}</cite>
          </div>
        </div>
      </div>
      }
    </>
  )
}