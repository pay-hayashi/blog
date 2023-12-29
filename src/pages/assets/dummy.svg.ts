import satori from "satori";
import type {APIRoute} from "astro";

// @ts-ignore
const raleway = fs.readFileSync('public/fonts/Raleway-Medium.ttf')

export const GET: APIRoute = async () => {
  const svg = await satori({
    type: "div",
    props: {
      children: [
        {
          type: "p",
          props: {
            children: "pancake_tor",
            tw: "p-0 m-0"
          }
        },
        {
          type: "p",
          props: {
            children: "blog",
            tw: "p-0 m-0"
          }
        }
      ],
      tw: "w-[500px] h-[500px] flex flex-col justify-center items-center text-6xl text-white bg-neutral-400",
    }
  }, {
    width: 500,
    height: 500,
    fonts: [{
      name: "Raleway Medium",
      data: raleway,
    }]
  })

  return new Response(svg, {
    headers: {"content-type": "image/svg+xml"}
  })
}
