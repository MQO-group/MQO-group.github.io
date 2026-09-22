import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { PersonCard } from "../components/person-card";
import { people, personGroups } from "../data/people";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "People",
  description: `The members of the ${site.name} group at ${site.university}.`,
};

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        label="People"
        title="The group"
        lede="Experimentalists and theorists working across molecular microcavities, polariton condensates and levitated optomechanics."
      />

      <section className="section section--flush" style={{ paddingTop: 0 }}>
        <div className="shell">
          {personGroups.map((group) => {
            const members = people.filter((p) => p.group === group.key);
            if (members.length === 0) return null;

            return (
              <div className="people-group" key={group.key}>
                <div className="people-group__head">
                  <h2 className="h-card">{group.label}</h2>
                  <span className="people-group__count">
                    {String(members.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid grid--3" style={{ marginTop: "1.4rem" }}>
                  {members.map((person) => (
                    <PersonCard
                      key={person.name}
                      person={person}
                      variant={group.key === "lead" ? "lead" : "default"}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
