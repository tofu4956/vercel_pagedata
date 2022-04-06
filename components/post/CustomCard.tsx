import { useEffect, useState } from "react";
import Image from 'next/image'
import { DOMAIN_NAME } from "../../lib/constants";

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
    if(process.env.NODE_ENV !== 'production'){
      setIsLoaded(true);
      return;
    }
    const url = new URL(`https://${DOMAIN_NAME}/api/card`)
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
        <div className="no-underline bg-slate-200 dark:bg-stone-800 rounded-md border border-slate-400 dark:border-slate-100 card card-side">
        <figure className="max-w-[256px]">{data['image'] && <img className="w-32 md:w-64"src={(ImageHandler(data['image']))} alt="Site Image"/>}</figure>
          <div className="mx-2 text-xs card-body">
            <div className="pb-4 mb-auto text-2xl">{data['title']}</div>
            <span className="overflow-hidden">{data['description']}</span>
            <cite className="my-2 mt-auto mr-2 text-right align-bottom text-xs">
              <Image src={`http://www.google.com/s2/favicons?domain=${dataSrc}`} alt="favicon" width={16} height={16}/>
              {dataSrc}
            </cite>
          </div>
        </div>
      </div>
      }
    </>
  )
}