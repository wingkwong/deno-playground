interface IPerson {
  id: string;
  name: string;
  title: string;
}

let people: Array<IPerson> = [{
  id: "1",
  name: "Lorem Ipsum",
  title: "Excepteur sint 1",
}, {
  id: "2",
  name: "Lorem Ipsum 2",
  title: "Excepteur sint 2",
}, {
  id: "3",
  name: "Lorem Ipsum 3",
  title: "Excepteur sint 3",
}];

const getPeople = ({ response }: { response: any }) => {
  response.body = people;
};

const getPerson = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const person: IPerson | undefined = searchPersonById(params.id);
  if (person) {
    response.status = 200;
    response.body = people[0];
  } else {
    response.status = 404;
    response.body = { message: `Person not found.` };
  }
};

const addPerson = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const person: IPerson = body.value;
  people.push(person);
  response.body = { message: "OK" };
  response.status = 200;
};

const updatePerson = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  let person: IPerson | undefined = searchPersonById(params.id);
  if (person) {
    const body = await request.body();
    const updateInfos: { name?: string; title?: string } = body.value;
    person = { ...person, ...updateInfos };
    people = [...people.filter((person) => person.id !== params.id), person];
    response.status = 200;
    response.body = { message: "OK" };
  } else {
    response.status = 404;
    response.body = { message: `Person not found` };
  }
};

const deletePerson = (
  { params, response }: { params: { id: string }; response: any },
) => {
  people = people.filter((person) => person.id !== params.id);
  response.body = { message: "OK" };
  response.status = 200;
};

const searchPersonById = (id: string): (IPerson | undefined) =>
  people.filter((person) => person.id === id)[0];

export { getPeople, getPerson, addPerson, updatePerson, deletePerson };
