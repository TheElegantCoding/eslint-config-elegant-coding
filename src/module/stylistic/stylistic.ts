import { stylisticRule } from "./rule/stylistic_rule"

const stylistic =
{
  plugins: [ '@stylistic' ],
  rules:
  {
    ...stylisticRule
  },
}

export { stylistic }