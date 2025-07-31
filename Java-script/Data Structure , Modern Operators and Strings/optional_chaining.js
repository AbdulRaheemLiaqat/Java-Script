const user = {
  name: 'Abdullah',
  job: {
    title: 'Developer',
    company: 'TechCorp'
  }
};
// Without optional chaining
console.log(user.job && user.job.title); // "Developer"
// With optional chaining
console.log(user?.job?.title); // "Developer"
console.log(user?.address?.city); // undefined (no error)