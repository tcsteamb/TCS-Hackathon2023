"use client";

import { teamData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import TeamContent from "./teamContent";

export default function Team() {
    const { ref } = useSectionInView("Team");

    return (
        <section
            id="team"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>Team</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-900">
                {teamData.map((team, index) => (
                    <TeamContent
                        team={team}
                        index={index}
                        key={team.name}
                    />
                ))}
            </ul>
            {/* <br/>
            <div className="flex flex-start">
                <p className="flex flex-wrap flex-start">
                    With a keen eye for business strategy, Gnanavel is our driving force behind effective and innovative business solutions.
                </p>
                <p className="flex flex-wrap flex-start">
                    Piyani is our coding virtuoso, translating ideas into functional and efficient software solutions with finesse.
                </p>
                <p className="flex flex-wrap flex-start">
                    Ensuring the robustness of our creations, Manas meticulously tests and validates every aspect, guaranteeing the highest quality in our products.
                </p>
                <p className="flex flex-wrap flex-start">
                    Karthik is the creative mind behind the aesthetics, transforming concepts into visually stunning designs that captivate and inspire.
                </p>
                <p className="flex flex-wrap flex-start">
                    As our architectural mastermind, Hector designs the blueprints for success, ensuring that our projects stand on a solid foundation of ingenuity and scalability.
                </p>
            </div> */}
        </section >
    );
}