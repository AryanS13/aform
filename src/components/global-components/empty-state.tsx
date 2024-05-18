import Button from "./button";

export default function EmptyState() {
    return (
    <section className="py-4 overflow-hidden">
    <div className="container px-4 mx-auto flex flex-col items-center">
      <img src="empty-state.jpg" width="300px" />
      <div className="max-w-md mx-auto text-center pt-8">
        <h2 className="font-heading mb-3 text-2xl font-semibold">It’s a bit empty here</h2>
        <p className="mb-7 text-neutral-500">Make sure to customize your timeline first and fill it with eye-catching articles and products.</p>
      </div>
      <Button {...{text: 'Add form'}} />
      
    </div>
  </section>);
}