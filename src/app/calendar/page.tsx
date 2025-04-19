import CalendarComponent from "../_components/CalendarComponent";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-full h-full py-8 px-8">
      <h1 className="text-2xl font-semibold ">Calendar</h1>
        <CalendarComponent/>
    </div>
  );
} 