import { PageProps } from "./util/types";

export const Page = ({ children, name} : PageProps) => {
    return (
      <main className={`page ${name}`}>
        {children}
      </main>
    );
  }
  
  export default Page;
  