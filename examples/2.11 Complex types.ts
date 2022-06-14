function complexTypes() {
  // Generic types
  function identity<Type>(arg: Type): void {
    console.log(`
    This is the arg: ${arg}
    This is the arg type: ${typeof arg}  
    `)
  }

  identity<string>('string');
  identity<number>(1);
  identity<boolean>(true);

  // Indexed Access Types
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person["age"];
  type Age2 = number;  
}

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
function mappedTypes() {
  type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
  }

  type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };

  type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
  };

  type Features = {
    darkMode: () => void
    premiumUser: () => void
    cancelImports: () => void
    unlimitedStorage: () => void
  }

  type FeatureFlags = OptionsFlags<Features>

  const featureFlags: FeatureFlags = {
    cancelImports: true,
    darkMode: true,
    premiumUser: true,
    unlimitedStorage: true,
  }

  type User = {
    email: string
    userId: string
    accountId?: string
    tenantId?: string
    accountName?: string
  }

  type CreatedUser = Concrete<User>

  const maybeUser: User = {
    userId: '123',
    email: 'mm@mm.mm'
  }

  const createdUser: CreatedUser = {
    userId: '123',
    email: 'mm@mm.mm',
    accountId: '123',
    tenantId: '123',
    accountName: 'mm'
  }

  type GettersUser = Getters<User>

  class UserClass implements User, GettersUser {
    userId: string
    email: string

    constructor(userId: string, email: string) {
      this.userId = userId
      this.email = email
    }

    getUserId(): string {
      return this.userId
    }

    getEmail(): string {
      return this.email
    }
  }

  const user = new UserClass('id1', 'mm@mm.mm')
  console.log(`
    This is the user email: ${user.getEmail()}
    This is the user id: ${user.getUserId()}
  `)
}

// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
function templateLiteralTypes() {
  type CssPadding = 'padding-left' | 'padding-right' | 'padding-top' | 'padding-bottom';

  type Direction = 'left' | 'right' | 'top' | 'bottom';
  type SimpleCssPadding = `padding-${Direction}`;
  const leftPadding: SimpleCssPadding = 'padding-left';

  type WelcomeToCarto = "Welcome to CARTO"
  type UppercaseWelcomeToCarto = Uppercase<WelcomeToCarto>
  type LowercaseWelcomeToCarto = Lowercase<WelcomeToCarto>
  type UncapitalizeWelcomeToCarto = Uncapitalize<UppercaseWelcomeToCarto>

  // const welcome: UppercaseWelcomeToCarto = "Welcome to CARTO"
  const welcome: UppercaseWelcomeToCarto = "WELCOME TO CARTO"
  const uncapitalizedWelcome: UncapitalizeWelcomeToCarto = "wELCOME TO CARTO"
  console.log(`
    This is the welcome message: ${welcome}
    This is the uncapitalized welcome message: ${uncapitalizedWelcome}
  `)

  type User = {
    Email: string,
    UserId: string,
    AccountId?: string,
  }

  type UncapitalizeKeys<T> = {
    [P in keyof T as `${Uncapitalize<string & P>}`]: T[P];
  }

  type UserUncapitalized = UncapitalizeKeys<User>
  // const userUncapitalized: UserUncapitalized = {
  //   Email: 'mm@mm.mm',
  //   userId: '0',
  //   accountId: 'id1'
  // } ❌ Error
}

export function typescriptAdvancedTypes() {
  complexTypes()
  // mappedTypes()
  // templateLiteralTypes()
}