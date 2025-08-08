import CardMember from './CardMember';
import teamData from '@/data/team.json';

interface TeamMember {
  id: number;
  photo: string;
  name: string;
  position: string;
}

export default function TeamSection() {
  // Mostrar solo las primeras 12 personas (3 filas de 4)
  const teamMembers = teamData.teamMembers.slice(0, 12) as TeamMember[];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h2 
          className="mb-4 text-center"
          style={{
            fontFamily: 'Mulish',
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#921B95'
          }}
        >
          Equipo
        </h2>

        {/* Línea horizontal verde */}
        <div className="flex justify-center mb-8">
          <hr 
            className="border-0"
            style={{
              width: '80px',
              height: '3px',
              backgroundColor: '#40B637',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Texto Descriptivo */}
        <div className="mb-12">
          <p 
            className="text-center max-w-4xl mx-auto"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              lineHeight: '150%', // Mejoré para mejor legibilidad
              letterSpacing: '0%',
              color: '#000000'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat elit, ut rhoncus nisl. Aenean vitae placerat augue, eget 
            tincidunt turpis. Cras elementum, urna id convallis commodo, magna nunc maximus urna, in porta leo quam ac ipsum. Proin sodales nisl sed 
            ante varius, ut fermentum mi condimentum.
          </p>
        </div>

        {/* Grid de Miembros del Equipo - 4 por fila, 3 filas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <CardMember
              key={member.id}
              photo={member.photo}
              name={member.name}
              position={member.position}
              onClick={() => console.log(`Ver perfil de ${member.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
