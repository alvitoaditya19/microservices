import Head from "next/head";
import Link from "next/link";

function Todo({data}) {
  return (
    <>
      <Head>
        <title>Micro | Random | Detail {data.title}</title>
      </Head>

      <main className="container mt-12 mx-auto">
        <h1 className="text-6xl">Fetching {data.title}</h1>
        <p>Please Complete Your Task</p>
        <Link href='/random'><a>Bring me to random page</a></Link>
      </main>
    </>
  );
}

Todo.getInitialProps = async (props) => {
  const {id} = props.query
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);

    return { data };
  } catch (err) {}
};

export default Todo;