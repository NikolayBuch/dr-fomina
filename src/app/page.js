import "styles/reset.scss";
import "styles/common.scss";

import Main from "pages/Home";
import Layout from "components/Layout";

export default function Home() {
  return (
    <main >
      <Layout>
        <Main />
      </Layout>
    </main>
  );
}
