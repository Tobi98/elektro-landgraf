import Head from "next/head";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

interface Props {
    name: string;
}

const SEO: FunctionComponent<Props> = ({ name }) => {
    const router = useRouter();
    const path = router.asPath === "/" ? "" : router.asPath;
    const cannocialUrl = `https://elektrotechnik-landgraf.at${path}`;
    return (
        <Head>
            <title>{name} | Elektrotechnik Landgraf</title>
            <meta name="description" content="Elektrotechnik Landgraf. Wir elektrisieren ihr Haus von A bis Z."></meta>
            <meta
                name="keywords"
                content="Elektrotechnik, Elektroinstallation, Badsanierung, Küchenumbau, Kleinarbeiten, Wärmepumpen, E-Ladestationen"
            ></meta>
            <meta name="author" content="Elektrotechnik Landgraf"></meta>
            <meta name="publisher" content="Elektrotechnik Landgraf"></meta>
            <meta name="robots" content="index" />
            <link rel="canonical" href={cannocialUrl} />

            <meta property="og:title" content={`${name} | Elektrotechnik Landgraf`} key="title" />
            <meta property="og:description" content="Elektrotechnik Landgraf. Wir elektrisieren ihr Haus von A bis Z." key="title" />
        </Head>
    );
};

export default SEO;
