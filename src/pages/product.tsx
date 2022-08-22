import type { NextPage } from "next";
import { Footer, Head, Header } from "~/components/Layout";
import { Heading, SubHeading } from "~/components/Text";
import { ProductCard, BigProductCard } from "~/components/Card";

const SEKIYAN_HP = require("../../public/image/sekiyan-hp.jpg");
const EFFECTOR_GEEK = require("../../public/image/effector-geek.jpg");
const CALCULATOR = require("../../public/image/calculator.jpg");
const RANDOM_APP = require("../../public/image/random-app.jpg");
const OLYMPIC_APP = require("../../public/image/olympic-app.jpg");
const CIRKIT_HP = require("../../public/image/cirkit-hp.jpg");
const MAIL = require("../../public/image/mail.jpeg");
const TOURISM_HP = require("../../public/image/tourism-hp.jpg");
const TOTTEKU = require("../../public/image/totteku.jpg");

const individualProducts = [
  [
    {
      url: "",
      imagePath: SEKIYAN_HP,
      alt: "Sekiyan's website",
      title: "ポートフォリオサイト",
      desc: "自分のポートフォリオサイト",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      url: "https://effector-geek.vercel.app/",
      imagePath: EFFECTOR_GEEK,
      alt: "Effector Geek",
      title: "Effector Geek",
      desc: "エフェクター情報共有サイト",
      tech: [
        "TypeScript",
        "React",
        "Redux",
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "Vercel",
      ],
    },
  ],
  [
    {
      url: "https://sekiyan372-calculator.netlify.app/",
      imagePath: CALCULATOR,
      alt: "calculator",
      title: "calculator",
      desc: "単純な電卓",
      tech: ["TypeScript", "React", "Styled Components", "Netrify"],
    },
    {
      url: "https://random-app.vercel.app/",
      imagePath: RANDOM_APP,
      alt: "Random App",
      title: "ランダムアプリ",
      desc: "ランダムに何かを決めるサイト",
      tech: ["TypeScript", "React", "Styled Components", "Vercel"],
    },
    {
      url: "https://saikyo-japan.netlify.app/",
      imagePath: OLYMPIC_APP,
      alt: "Olympic App",
      title: "ぼくのかんがえたさいきょうのさむらいじゃぱん",
      desc: "個人の考えた侍ジャパンを作って遊ぶサイト",
      tech: ["JavaScript", "Vue", "Nuxt.js", "Netrify"],
    },
  ],
];

const joinProduct = [
  {
    url: "https://www.cirkit.jp/",
    imagePath: CIRKIT_HP,
    alt: "CirKit HP",
    title: "CirKitホームページ",
    organization: "株式会社CirKit",
    desc: "学生ベンチャー企業のコーポレートサイト",
    tech: ["TypeScript", "React"],
  },
  {
    imagePath: MAIL,
    alt: "atren",
    title: "@連絡網",
    organization: "株式会社CirKit",
    desc: "受託開発のメーリングサービス",
    tech: ["Ruby on Rails", "JavaScript", "Sass", "Bulma", "EC2", "S3"],
  },
  {
    url: "https://tourism-project.com/",
    imagePath: TOURISM_HP,
    alt: "Tourism HP",
    title: "Tourismプロジェクトホームページ",
    organization: "Tourism プロジェクト",
    desc: "プロジェクトのホームページ",
    tech: [" TypeScript", "React", "GatsbyJS", "Netrify"],
  },
  {
    url: "https://totteku.tourism-project.com/",
    imagePath: TOTTEKU,
    alt: "TOTTEKU",
    title: "撮っテク！",
    organization: "Tourism プロジェクト",
    desc: "湯涌町でのイベントのためのサイト",
    tech: [" TypeScript", "Vue", "NuxtJS", "Netrify"],
  },
];

const Product: NextPage = () => {
  return (
    <>
      <Head title="Product" />

      <Header />
      <div className="bg-jade text-white">
        <Heading>Product</Heading>
        <div className="p-10">
          <div className="mb-20">
            <SubHeading>Individual</SubHeading>
            {individualProducts.map((productList, index) => (
              <div className="flex flex-wrap justify-center" key={index}>
                {productList.map((product, subIndex) => (
                  <span key={subIndex}>
                    {index === 0 && (
                      <BigProductCard
                        url={product.url}
                        imagePath={product.imagePath}
                        alt={product.alt}
                        title={product.title}
                        desc={product.desc}
                        technologies={product.tech}
                      />
                    )}
                    {index === 1 && (
                      <ProductCard
                        url={product.url}
                        imagePath={product.imagePath}
                        alt={product.alt}
                        title={product.title}
                        desc={product.desc}
                        technologies={product.tech}
                      />
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div>
            <SubHeading>Join</SubHeading>
            <div className="flex flex-wrap justify-center">
              {joinProduct.map((product, index) => (
                <span key={index}>
                  <ProductCard
                    url={product.url}
                    imagePath={product.imagePath}
                    alt={product.alt}
                    title={product.title}
                    organization={product.organization}
                    desc={product.desc}
                    technologies={product.tech}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
