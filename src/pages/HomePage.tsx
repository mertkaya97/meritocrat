import {Intro as IntroBlock} from "../components/blocks/Intro.tsx";
import {About as AboutBlock} from "../components/blocks/About.tsx";
import {SchemeWork as SchemeWorkBlock} from "../components/blocks/SchemeWork.tsx";

export default function HomePage() {
    return (
        <>
            <IntroBlock />
            <AboutBlock />
            <SchemeWorkBlock />
        </>
    );
}