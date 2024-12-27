import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Juanita Price",
    role: "CEO",
    bio: "Leading our global vision for trade compliance excellence",
    avatar: "JP",
  },
  {
    name: "Nikita Thomas",
    role: "Head of Consulting",
    bio: "Expert in international trade regulations and compliance strategy",
    avatar: "NT",
  },
  {
    name: "Jermill Graham",
    role: "TechGuy",
    bio: "Driving innovation in compliance technology solutions",
    avatar: "JG",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="p-6">
              <div className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <div className="flex h-full w-full items-center justify-center bg-blue-600 text-white text-xl">
                    {member.avatar}
                  </div>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}