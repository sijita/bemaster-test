import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner
        className="animate-pulse"
        label="Cargando..."
        color="primary"
        size="lg"
      />
    </div>
  );
}
