import { GraphQLScalarType, Kind } from 'graphql';
import { parseISO, formatISO } from 'date-fns';

const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom scalar type for dates',
  parseValue(value) {
    return parseISO(value); // Convert from client input to Date object
  },
  serialize(value) {
    return formatISO(value); // Convert from Date object to string for client output
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return parseISO(ast.value); // Convert from string literal to Date object
    }
    return null;
  },
});

export default DateScalar;
