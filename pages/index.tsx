import Card from '../components/common/Card';
import { PLACEHOLDER_IMAGE, UI_TEXT } from '../constants';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Explore Properties</h1>
      <Card
        title="Cozy Apartment in Marrakech"
        description="A lovely 2-bedroom apartment in the heart of the city."
        image={PLACEHOLDER_IMAGE}
        buttonText={UI_TEXT.bookNow}
        onAction={() => alert('Booked!')}
      />
    </main>
  );
}
