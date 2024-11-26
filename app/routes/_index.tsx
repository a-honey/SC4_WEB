import { authPaths, packPaths } from "~/constants/paths";

import Button from "~/ui/Button";
import Layout from "~/layouts/CommonLayout";
import { Link } from "@remix-run/react";
import { LinkItemType } from "~/types";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const links: LinkItemType[] = [
  { label: "내 생존배낭 등록하기", to: packPaths.MAIN },
  { label: "로그인 하러하기", to: authPaths.LOGIN },
  { label: "만든이들", to: packPaths.ABOUT },
];

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div>가방사진이라도,,</div>
        <div className="flex flex-col gap-[20px]">
          {links.map(({ label, to }) => (
            <Link key={to} to={to}>
              <Button label={label} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
