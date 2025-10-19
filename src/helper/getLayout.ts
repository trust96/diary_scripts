export type TLayoutArgs = {
  title: string;
};
export const getLayout = (args: TLayoutArgs) => {
  const { title } = args;
  return `${title}

Mood: 0/10


## Activities

- [ ] [Morning Detox](/routines/detox.md) - 15 minutes at 06:45
- [ ] [Morning Routine](/routines/morning.md) - 30 minutes at 07:00
- [ ] [Evening Detox](/routines/detox.md) - 15 minutes at 06:45
- [ ] [Evening Routine](/routines/evening.md) - 30 minutes at 19:00

### Tasks

## Journal

`;
};
