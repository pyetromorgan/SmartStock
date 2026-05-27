
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Counter
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Counter = $Result.DefaultSelection<Prisma.$CounterPayload>
/**
 * Model Categoria
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Fornecedor
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Fornecedor = $Result.DefaultSelection<Prisma.$FornecedorPayload>
/**
 * Model Produto
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Cliente
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Pedido
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model Movimentacao
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Movimentacao = $Result.DefaultSelection<Prisma.$MovimentacaoPayload>
/**
 * Model Reposicao
 * ///////////////////////////////
 * ///////////////////////////////
 */
export type Reposicao = $Result.DefaultSelection<Prisma.$ReposicaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Counters
 * const counters = await prisma.counter.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Counters
   * const counters = await prisma.counter.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.counter`: Exposes CRUD operations for the **Counter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Counters
    * const counters = await prisma.counter.findMany()
    * ```
    */
  get counter(): Prisma.CounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **Fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.FornecedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacao`: Exposes CRUD operations for the **Movimentacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimentacaos
    * const movimentacaos = await prisma.movimentacao.findMany()
    * ```
    */
  get movimentacao(): Prisma.MovimentacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reposicao`: Exposes CRUD operations for the **Reposicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reposicaos
    * const reposicaos = await prisma.reposicao.findMany()
    * ```
    */
  get reposicao(): Prisma.ReposicaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Counter: 'Counter',
    Categoria: 'Categoria',
    Fornecedor: 'Fornecedor',
    Produto: 'Produto',
    Cliente: 'Cliente',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido',
    Movimentacao: 'Movimentacao',
    Reposicao: 'Reposicao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "counter" | "categoria" | "fornecedor" | "produto" | "cliente" | "pedido" | "itemPedido" | "movimentacao" | "reposicao"
      txIsolationLevel: never
    }
    model: {
      Counter: {
        payload: Prisma.$CounterPayload<ExtArgs>
        fields: Prisma.CounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findFirst: {
            args: Prisma.CounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findMany: {
            args: Prisma.CounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          create: {
            args: Prisma.CounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          createMany: {
            args: Prisma.CounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          update: {
            args: Prisma.CounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          deleteMany: {
            args: Prisma.CounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          aggregate: {
            args: Prisma.CounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounter>
          }
          groupBy: {
            args: Prisma.CounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CounterFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CounterAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CounterCountArgs<ExtArgs>
            result: $Utils.Optional<CounterCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoriaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoriaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Fornecedor: {
        payload: Prisma.$FornecedorPayload<ExtArgs>
        fields: Prisma.FornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findFirst: {
            args: Prisma.FornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findMany: {
            args: Prisma.FornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          create: {
            args: Prisma.FornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          createMany: {
            args: Prisma.FornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          update: {
            args: Prisma.FornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          deleteMany: {
            args: Prisma.FornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.FornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FornecedorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FornecedorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProdutoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProdutoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ClienteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ClienteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PedidoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PedidoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ItemPedidoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ItemPedidoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      Movimentacao: {
        payload: Prisma.$MovimentacaoPayload<ExtArgs>
        fields: Prisma.MovimentacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovimentacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          update: {
            args: Prisma.MovimentacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovimentacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacao>
          }
          groupBy: {
            args: Prisma.MovimentacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MovimentacaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MovimentacaoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MovimentacaoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoCountAggregateOutputType> | number
          }
        }
      }
      Reposicao: {
        payload: Prisma.$ReposicaoPayload<ExtArgs>
        fields: Prisma.ReposicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReposicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReposicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload>
          }
          findFirst: {
            args: Prisma.ReposicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReposicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload>
          }
          findMany: {
            args: Prisma.ReposicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload>[]
          }
          create: {
            args: Prisma.ReposicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload>
          }
          createMany: {
            args: Prisma.ReposicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReposicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload>
          }
          update: {
            args: Prisma.ReposicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload>
          }
          deleteMany: {
            args: Prisma.ReposicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReposicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReposicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposicaoPayload>
          }
          aggregate: {
            args: Prisma.ReposicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReposicao>
          }
          groupBy: {
            args: Prisma.ReposicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReposicaoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReposicaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReposicaoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReposicaoCountArgs<ExtArgs>
            result: $Utils.Optional<ReposicaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    counter?: CounterOmit
    categoria?: CategoriaOmit
    fornecedor?: FornecedorOmit
    produto?: ProdutoOmit
    cliente?: ClienteOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
    movimentacao?: MovimentacaoOmit
    reposicao?: ReposicaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FornecedorCountOutputType
   */

  export type FornecedorCountOutputType = {
    reposicoes: number
  }

  export type FornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reposicoes?: boolean | FornecedorCountOutputTypeCountReposicoesArgs
  }

  // Custom InputTypes
  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorCountOutputType
     */
    select?: FornecedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountReposicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReposicaoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itens: number
    movimentacoes: number
    reposicoes: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | ProdutoCountOutputTypeCountItensArgs
    movimentacoes?: boolean | ProdutoCountOutputTypeCountMovimentacoesArgs
    reposicoes?: boolean | ProdutoCountOutputTypeCountReposicoesArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountReposicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReposicaoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedidos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Counter
   */

  export type AggregateCounter = {
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  export type CounterAvgAggregateOutputType = {
    seq: number | null
  }

  export type CounterSumAggregateOutputType = {
    seq: number | null
  }

  export type CounterMinAggregateOutputType = {
    id: string | null
    seq: number | null
  }

  export type CounterMaxAggregateOutputType = {
    id: string | null
    seq: number | null
  }

  export type CounterCountAggregateOutputType = {
    id: number
    seq: number
    _all: number
  }


  export type CounterAvgAggregateInputType = {
    seq?: true
  }

  export type CounterSumAggregateInputType = {
    seq?: true
  }

  export type CounterMinAggregateInputType = {
    id?: true
    seq?: true
  }

  export type CounterMaxAggregateInputType = {
    id?: true
    seq?: true
  }

  export type CounterCountAggregateInputType = {
    id?: true
    seq?: true
    _all?: true
  }

  export type CounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counter to aggregate.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Counters
    **/
    _count?: true | CounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounterMaxAggregateInputType
  }

  export type GetCounterAggregateType<T extends CounterAggregateArgs> = {
        [P in keyof T & keyof AggregateCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounter[P]>
      : GetScalarType<T[P], AggregateCounter[P]>
  }




  export type CounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounterWhereInput
    orderBy?: CounterOrderByWithAggregationInput | CounterOrderByWithAggregationInput[]
    by: CounterScalarFieldEnum[] | CounterScalarFieldEnum
    having?: CounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounterCountAggregateInputType | true
    _avg?: CounterAvgAggregateInputType
    _sum?: CounterSumAggregateInputType
    _min?: CounterMinAggregateInputType
    _max?: CounterMaxAggregateInputType
  }

  export type CounterGroupByOutputType = {
    id: string
    seq: number
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  type GetCounterGroupByPayload<T extends CounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounterGroupByOutputType[P]>
            : GetScalarType<T[P], CounterGroupByOutputType[P]>
        }
      >
    >


  export type CounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seq?: boolean
  }, ExtArgs["result"]["counter"]>



  export type CounterSelectScalar = {
    id?: boolean
    seq?: boolean
  }

  export type CounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seq", ExtArgs["result"]["counter"]>

  export type $CounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Counter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seq: number
    }, ExtArgs["result"]["counter"]>
    composites: {}
  }

  type CounterGetPayload<S extends boolean | null | undefined | CounterDefaultArgs> = $Result.GetResult<Prisma.$CounterPayload, S>

  type CounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CounterCountAggregateInputType | true
    }

  export interface CounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Counter'], meta: { name: 'Counter' } }
    /**
     * Find zero or one Counter that matches the filter.
     * @param {CounterFindUniqueArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounterFindUniqueArgs>(args: SelectSubset<T, CounterFindUniqueArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Counter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CounterFindUniqueOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounterFindUniqueOrThrowArgs>(args: SelectSubset<T, CounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Counter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounterFindFirstArgs>(args?: SelectSubset<T, CounterFindFirstArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Counter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounterFindFirstOrThrowArgs>(args?: SelectSubset<T, CounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Counters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Counters
     * const counters = await prisma.counter.findMany()
     * 
     * // Get first 10 Counters
     * const counters = await prisma.counter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counterWithIdOnly = await prisma.counter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounterFindManyArgs>(args?: SelectSubset<T, CounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Counter.
     * @param {CounterCreateArgs} args - Arguments to create a Counter.
     * @example
     * // Create one Counter
     * const Counter = await prisma.counter.create({
     *   data: {
     *     // ... data to create a Counter
     *   }
     * })
     * 
     */
    create<T extends CounterCreateArgs>(args: SelectSubset<T, CounterCreateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Counters.
     * @param {CounterCreateManyArgs} args - Arguments to create many Counters.
     * @example
     * // Create many Counters
     * const counter = await prisma.counter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounterCreateManyArgs>(args?: SelectSubset<T, CounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Counter.
     * @param {CounterDeleteArgs} args - Arguments to delete one Counter.
     * @example
     * // Delete one Counter
     * const Counter = await prisma.counter.delete({
     *   where: {
     *     // ... filter to delete one Counter
     *   }
     * })
     * 
     */
    delete<T extends CounterDeleteArgs>(args: SelectSubset<T, CounterDeleteArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Counter.
     * @param {CounterUpdateArgs} args - Arguments to update one Counter.
     * @example
     * // Update one Counter
     * const counter = await prisma.counter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounterUpdateArgs>(args: SelectSubset<T, CounterUpdateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Counters.
     * @param {CounterDeleteManyArgs} args - Arguments to filter Counters to delete.
     * @example
     * // Delete a few Counters
     * const { count } = await prisma.counter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounterDeleteManyArgs>(args?: SelectSubset<T, CounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Counters
     * const counter = await prisma.counter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounterUpdateManyArgs>(args: SelectSubset<T, CounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Counter.
     * @param {CounterUpsertArgs} args - Arguments to update or create a Counter.
     * @example
     * // Update or create a Counter
     * const counter = await prisma.counter.upsert({
     *   create: {
     *     // ... data to create a Counter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Counter we want to update
     *   }
     * })
     */
    upsert<T extends CounterUpsertArgs>(args: SelectSubset<T, CounterUpsertArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Counters that matches the filter.
     * @param {CounterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const counter = await prisma.counter.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CounterFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Counter.
     * @param {CounterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const counter = await prisma.counter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CounterAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterCountArgs} args - Arguments to filter Counters to count.
     * @example
     * // Count the number of Counters
     * const count = await prisma.counter.count({
     *   where: {
     *     // ... the filter for the Counters we want to count
     *   }
     * })
    **/
    count<T extends CounterCountArgs>(
      args?: Subset<T, CounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CounterAggregateArgs>(args: Subset<T, CounterAggregateArgs>): Prisma.PrismaPromise<GetCounterAggregateType<T>>

    /**
     * Group by Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounterGroupByArgs['orderBy'] }
        : { orderBy?: CounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Counter model
   */
  readonly fields: CounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Counter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Counter model
   */
  interface CounterFieldRefs {
    readonly id: FieldRef<"Counter", 'String'>
    readonly seq: FieldRef<"Counter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Counter findUnique
   */
  export type CounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findUniqueOrThrow
   */
  export type CounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findFirst
   */
  export type CounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findFirstOrThrow
   */
  export type CounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findMany
   */
  export type CounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counters to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter create
   */
  export type CounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to create a Counter.
     */
    data: XOR<CounterCreateInput, CounterUncheckedCreateInput>
  }

  /**
   * Counter createMany
   */
  export type CounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Counters.
     */
    data: CounterCreateManyInput | CounterCreateManyInput[]
  }

  /**
   * Counter update
   */
  export type CounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to update a Counter.
     */
    data: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
    /**
     * Choose, which Counter to update.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter updateMany
   */
  export type CounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Counters.
     */
    data: XOR<CounterUpdateManyMutationInput, CounterUncheckedUpdateManyInput>
    /**
     * Filter which Counters to update
     */
    where?: CounterWhereInput
    /**
     * Limit how many Counters to update.
     */
    limit?: number
  }

  /**
   * Counter upsert
   */
  export type CounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The filter to search for the Counter to update in case it exists.
     */
    where: CounterWhereUniqueInput
    /**
     * In case the Counter found by the `where` argument doesn't exist, create a new Counter with this data.
     */
    create: XOR<CounterCreateInput, CounterUncheckedCreateInput>
    /**
     * In case the Counter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
  }

  /**
   * Counter delete
   */
  export type CounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter which Counter to delete.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter deleteMany
   */
  export type CounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counters to delete
     */
    where?: CounterWhereInput
    /**
     * Limit how many Counters to delete.
     */
    limit?: number
  }

  /**
   * Counter findRaw
   */
  export type CounterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Counter aggregateRaw
   */
  export type CounterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Counter without action
   */
  export type CounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    descricao: string
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["categoria"]>

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * @param {CategoriaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const categoria = await prisma.categoria.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoriaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Categoria.
     * @param {CategoriaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const categoria = await prisma.categoria.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoriaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria findRaw
   */
  export type CategoriaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Categoria aggregateRaw
   */
  export type CategoriaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
  }


  /**
   * Model Fornecedor
   */

  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorMinAggregateOutputType = {
    id: string | null
    razao_social: string | null
    nome_fantasia: string | null
    cnpj: string | null
    email: string | null
    logradouro: string | null
    num_imovel: string | null
    complemento: string | null
    bairro: string | null
    municipio: string | null
    uf: string | null
    cep: string | null
    telefone: string | null
  }

  export type FornecedorMaxAggregateOutputType = {
    id: string | null
    razao_social: string | null
    nome_fantasia: string | null
    cnpj: string | null
    email: string | null
    logradouro: string | null
    num_imovel: string | null
    complemento: string | null
    bairro: string | null
    municipio: string | null
    uf: string | null
    cep: string | null
    telefone: string | null
  }

  export type FornecedorCountAggregateOutputType = {
    id: number
    razao_social: number
    nome_fantasia: number
    cnpj: number
    email: number
    logradouro: number
    num_imovel: number
    complemento: number
    bairro: number
    municipio: number
    uf: number
    cep: number
    telefone: number
    _all: number
  }


  export type FornecedorMinAggregateInputType = {
    id?: true
    razao_social?: true
    nome_fantasia?: true
    cnpj?: true
    email?: true
    logradouro?: true
    num_imovel?: true
    complemento?: true
    bairro?: true
    municipio?: true
    uf?: true
    cep?: true
    telefone?: true
  }

  export type FornecedorMaxAggregateInputType = {
    id?: true
    razao_social?: true
    nome_fantasia?: true
    cnpj?: true
    email?: true
    logradouro?: true
    num_imovel?: true
    complemento?: true
    bairro?: true
    municipio?: true
    uf?: true
    cep?: true
    telefone?: true
  }

  export type FornecedorCountAggregateInputType = {
    id?: true
    razao_social?: true
    nome_fantasia?: true
    cnpj?: true
    email?: true
    logradouro?: true
    num_imovel?: true
    complemento?: true
    bairro?: true
    municipio?: true
    uf?: true
    cep?: true
    telefone?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedor to aggregate.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type FornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorWhereInput
    orderBy?: FornecedorOrderByWithAggregationInput | FornecedorOrderByWithAggregationInput[]
    by: FornecedorScalarFieldEnum[] | FornecedorScalarFieldEnum
    having?: FornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }

  export type FornecedorGroupByOutputType = {
    id: string
    razao_social: string
    nome_fantasia: string | null
    cnpj: string
    email: string
    logradouro: string
    num_imovel: string
    complemento: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    telefone: string
    _count: FornecedorCountAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends FornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razao_social?: boolean
    nome_fantasia?: boolean
    cnpj?: boolean
    email?: boolean
    logradouro?: boolean
    num_imovel?: boolean
    complemento?: boolean
    bairro?: boolean
    municipio?: boolean
    uf?: boolean
    cep?: boolean
    telefone?: boolean
    reposicoes?: boolean | Fornecedor$reposicoesArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>



  export type FornecedorSelectScalar = {
    id?: boolean
    razao_social?: boolean
    nome_fantasia?: boolean
    cnpj?: boolean
    email?: boolean
    logradouro?: boolean
    num_imovel?: boolean
    complemento?: boolean
    bairro?: boolean
    municipio?: boolean
    uf?: boolean
    cep?: boolean
    telefone?: boolean
  }

  export type FornecedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "razao_social" | "nome_fantasia" | "cnpj" | "email" | "logradouro" | "num_imovel" | "complemento" | "bairro" | "municipio" | "uf" | "cep" | "telefone", ExtArgs["result"]["fornecedor"]>
  export type FornecedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reposicoes?: boolean | Fornecedor$reposicoesArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fornecedor"
    objects: {
      reposicoes: Prisma.$ReposicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      razao_social: string
      nome_fantasia: string | null
      cnpj: string
      email: string
      logradouro: string
      num_imovel: string
      complemento: string | null
      bairro: string
      municipio: string
      uf: string
      cep: string
      telefone: string
    }, ExtArgs["result"]["fornecedor"]>
    composites: {}
  }

  type FornecedorGetPayload<S extends boolean | null | undefined | FornecedorDefaultArgs> = $Result.GetResult<Prisma.$FornecedorPayload, S>

  type FornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface FornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fornecedor'], meta: { name: 'Fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {FornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FornecedorFindUniqueArgs>(args: SelectSubset<T, FornecedorFindUniqueArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, FornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FornecedorFindFirstArgs>(args?: SelectSubset<T, FornecedorFindFirstArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, FornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FornecedorFindManyArgs>(args?: SelectSubset<T, FornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fornecedor.
     * @param {FornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
     */
    create<T extends FornecedorCreateArgs>(args: SelectSubset<T, FornecedorCreateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fornecedors.
     * @param {FornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FornecedorCreateManyArgs>(args?: SelectSubset<T, FornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fornecedor.
     * @param {FornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
     */
    delete<T extends FornecedorDeleteArgs>(args: SelectSubset<T, FornecedorDeleteArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fornecedor.
     * @param {FornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FornecedorUpdateArgs>(args: SelectSubset<T, FornecedorUpdateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fornecedors.
     * @param {FornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FornecedorDeleteManyArgs>(args?: SelectSubset<T, FornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FornecedorUpdateManyArgs>(args: SelectSubset<T, FornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fornecedor.
     * @param {FornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends FornecedorUpsertArgs>(args: SelectSubset<T, FornecedorUpsertArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * @param {FornecedorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fornecedor = await prisma.fornecedor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FornecedorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Fornecedor.
     * @param {FornecedorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fornecedor = await prisma.fornecedor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FornecedorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends FornecedorCountArgs>(
      args?: Subset<T, FornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fornecedor model
   */
  readonly fields: FornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reposicoes<T extends Fornecedor$reposicoesArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$reposicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fornecedor model
   */
  interface FornecedorFieldRefs {
    readonly id: FieldRef<"Fornecedor", 'String'>
    readonly razao_social: FieldRef<"Fornecedor", 'String'>
    readonly nome_fantasia: FieldRef<"Fornecedor", 'String'>
    readonly cnpj: FieldRef<"Fornecedor", 'String'>
    readonly email: FieldRef<"Fornecedor", 'String'>
    readonly logradouro: FieldRef<"Fornecedor", 'String'>
    readonly num_imovel: FieldRef<"Fornecedor", 'String'>
    readonly complemento: FieldRef<"Fornecedor", 'String'>
    readonly bairro: FieldRef<"Fornecedor", 'String'>
    readonly municipio: FieldRef<"Fornecedor", 'String'>
    readonly uf: FieldRef<"Fornecedor", 'String'>
    readonly cep: FieldRef<"Fornecedor", 'String'>
    readonly telefone: FieldRef<"Fornecedor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fornecedor findUnique
   */
  export type FornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findUniqueOrThrow
   */
  export type FornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findFirst
   */
  export type FornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findFirstOrThrow
   */
  export type FornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findMany
   */
  export type FornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedors to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor create
   */
  export type FornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Fornecedor.
     */
    data: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
  }

  /**
   * Fornecedor createMany
   */
  export type FornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
  }

  /**
   * Fornecedor update
   */
  export type FornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Fornecedor.
     */
    data: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
    /**
     * Choose, which Fornecedor to update.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor updateMany
   */
  export type FornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to update.
     */
    limit?: number
  }

  /**
   * Fornecedor upsert
   */
  export type FornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Fornecedor to update in case it exists.
     */
    where: FornecedorWhereUniqueInput
    /**
     * In case the Fornecedor found by the `where` argument doesn't exist, create a new Fornecedor with this data.
     */
    create: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
    /**
     * In case the Fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
  }

  /**
   * Fornecedor delete
   */
  export type FornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter which Fornecedor to delete.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor deleteMany
   */
  export type FornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedors to delete
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to delete.
     */
    limit?: number
  }

  /**
   * Fornecedor findRaw
   */
  export type FornecedorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Fornecedor aggregateRaw
   */
  export type FornecedorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Fornecedor.reposicoes
   */
  export type Fornecedor$reposicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    where?: ReposicaoWhereInput
    orderBy?: ReposicaoOrderByWithRelationInput | ReposicaoOrderByWithRelationInput[]
    cursor?: ReposicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReposicaoScalarFieldEnum | ReposicaoScalarFieldEnum[]
  }

  /**
   * Fornecedor without action
   */
  export type FornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    quantidade: number | null
    preco_unitario: number | null
    qtd_estoque: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    quantidade: number | null
    preco_unitario: number | null
    qtd_estoque: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    marca: string | null
    detalhes: string | null
    quantidade: number | null
    unidade_medida: string | null
    preco_unitario: number | null
    qtd_estoque: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    marca: string | null
    detalhes: string | null
    quantidade: number | null
    unidade_medida: string | null
    preco_unitario: number | null
    qtd_estoque: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    marca: number
    detalhes: number
    quantidade: number
    unidade_medida: number
    preco_unitario: number
    qtd_estoque: number
    categoria_ids: number
    fornecedor_ids: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    quantidade?: true
    preco_unitario?: true
    qtd_estoque?: true
  }

  export type ProdutoSumAggregateInputType = {
    quantidade?: true
    preco_unitario?: true
    qtd_estoque?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    detalhes?: true
    quantidade?: true
    unidade_medida?: true
    preco_unitario?: true
    qtd_estoque?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    detalhes?: true
    quantidade?: true
    unidade_medida?: true
    preco_unitario?: true
    qtd_estoque?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    detalhes?: true
    quantidade?: true
    unidade_medida?: true
    preco_unitario?: true
    qtd_estoque?: true
    categoria_ids?: true
    fornecedor_ids?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: string
    nome: string
    marca: string
    detalhes: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids: string[]
    fornecedor_ids: string[]
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marca?: boolean
    detalhes?: boolean
    quantidade?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    qtd_estoque?: boolean
    categoria_ids?: boolean
    fornecedor_ids?: boolean
    itens?: boolean | Produto$itensArgs<ExtArgs>
    movimentacoes?: boolean | Produto$movimentacoesArgs<ExtArgs>
    reposicoes?: boolean | Produto$reposicoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>



  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    marca?: boolean
    detalhes?: boolean
    quantidade?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    qtd_estoque?: boolean
    categoria_ids?: boolean
    fornecedor_ids?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "marca" | "detalhes" | "quantidade" | "unidade_medida" | "preco_unitario" | "qtd_estoque" | "categoria_ids" | "fornecedor_ids", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | Produto$itensArgs<ExtArgs>
    movimentacoes?: boolean | Produto$movimentacoesArgs<ExtArgs>
    reposicoes?: boolean | Produto$reposicoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
      reposicoes: Prisma.$ReposicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      marca: string
      detalhes: string | null
      quantidade: number
      unidade_medida: string
      preco_unitario: number
      qtd_estoque: number
      categoria_ids: string[]
      fornecedor_ids: string[]
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * @param {ProdutoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const produto = await prisma.produto.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProdutoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Produto.
     * @param {ProdutoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const produto = await prisma.produto.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProdutoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends Produto$itensArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends Produto$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Produto$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reposicoes<T extends Produto$reposicoesArgs<ExtArgs> = {}>(args?: Subset<T, Produto$reposicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'String'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly marca: FieldRef<"Produto", 'String'>
    readonly detalhes: FieldRef<"Produto", 'String'>
    readonly quantidade: FieldRef<"Produto", 'Float'>
    readonly unidade_medida: FieldRef<"Produto", 'String'>
    readonly preco_unitario: FieldRef<"Produto", 'Float'>
    readonly qtd_estoque: FieldRef<"Produto", 'Float'>
    readonly categoria_ids: FieldRef<"Produto", 'String[]'>
    readonly fornecedor_ids: FieldRef<"Produto", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto findRaw
   */
  export type ProdutoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Produto aggregateRaw
   */
  export type ProdutoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Produto.itens
   */
  export type Produto$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Produto.movimentacoes
   */
  export type Produto$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Produto.reposicoes
   */
  export type Produto$reposicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    where?: ReposicaoWhereInput
    orderBy?: ReposicaoOrderByWithRelationInput | ReposicaoOrderByWithRelationInput[]
    cursor?: ReposicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReposicaoScalarFieldEnum | ReposicaoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    data_nascimento: Date | null
    email: string | null
    logradouro: string | null
    num_imovel: string | null
    complemento: string | null
    bairro: string | null
    municipio: string | null
    uf: string | null
    cep: string | null
    celular: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    data_nascimento: Date | null
    email: string | null
    logradouro: string | null
    num_imovel: string | null
    complemento: string | null
    bairro: string | null
    municipio: string | null
    uf: string | null
    cep: string | null
    celular: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    data_nascimento: number
    email: number
    logradouro: number
    num_imovel: number
    complemento: number
    bairro: number
    municipio: number
    uf: number
    cep: number
    celular: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    email?: true
    logradouro?: true
    num_imovel?: true
    complemento?: true
    bairro?: true
    municipio?: true
    uf?: true
    cep?: true
    celular?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    email?: true
    logradouro?: true
    num_imovel?: true
    complemento?: true
    bairro?: true
    municipio?: true
    uf?: true
    cep?: true
    celular?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    email?: true
    logradouro?: true
    num_imovel?: true
    complemento?: true
    bairro?: true
    municipio?: true
    uf?: true
    cep?: true
    celular?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    cpf: string
    data_nascimento: Date | null
    email: string
    logradouro: string
    num_imovel: string
    complemento: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    celular: string
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    email?: boolean
    logradouro?: boolean
    num_imovel?: boolean
    complemento?: boolean
    bairro?: boolean
    municipio?: boolean
    uf?: boolean
    cep?: boolean
    celular?: boolean
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    email?: boolean
    logradouro?: boolean
    num_imovel?: boolean
    complemento?: boolean
    bairro?: boolean
    municipio?: boolean
    uf?: boolean
    cep?: boolean
    celular?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "data_nascimento" | "email" | "logradouro" | "num_imovel" | "complemento" | "bairro" | "municipio" | "uf" | "cep" | "celular", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string
      data_nascimento: Date | null
      email: string
      logradouro: string
      num_imovel: string
      complemento: string | null
      bairro: string
      municipio: string
      uf: string
      cep: string
      celular: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * @param {ClienteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cliente = await prisma.cliente.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ClienteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cliente.
     * @param {ClienteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cliente = await prisma.cliente.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ClienteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly data_nascimento: FieldRef<"Cliente", 'DateTime'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly logradouro: FieldRef<"Cliente", 'String'>
    readonly num_imovel: FieldRef<"Cliente", 'String'>
    readonly complemento: FieldRef<"Cliente", 'String'>
    readonly bairro: FieldRef<"Cliente", 'String'>
    readonly municipio: FieldRef<"Cliente", 'String'>
    readonly uf: FieldRef<"Cliente", 'String'>
    readonly cep: FieldRef<"Cliente", 'String'>
    readonly celular: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente findRaw
   */
  export type ClienteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cliente aggregateRaw
   */
  export type ClienteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    num_pedido: number | null
  }

  export type PedidoSumAggregateOutputType = {
    num_pedido: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: string | null
    num_pedido: number | null
    data_hora: Date | null
    cliente_id: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: string | null
    num_pedido: number | null
    data_hora: Date | null
    cliente_id: string | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    num_pedido: number
    data_hora: number
    cliente_id: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    num_pedido?: true
  }

  export type PedidoSumAggregateInputType = {
    num_pedido?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    num_pedido?: true
    data_hora?: true
    cliente_id?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    num_pedido?: true
    data_hora?: true
    cliente_id?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    num_pedido?: true
    data_hora?: true
    cliente_id?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: string
    num_pedido: number
    data_hora: Date
    cliente_id: string
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_pedido?: boolean
    data_hora?: boolean
    cliente_id?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id?: boolean
    num_pedido?: boolean
    data_hora?: boolean
    cliente_id?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "num_pedido" | "data_hora" | "cliente_id", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      num_pedido: number
      data_hora: Date
      cliente_id: string
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * @param {PedidoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pedido = await prisma.pedido.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PedidoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pedido.
     * @param {PedidoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pedido = await prisma.pedido.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PedidoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'String'>
    readonly num_pedido: FieldRef<"Pedido", 'Int'>
    readonly data_hora: FieldRef<"Pedido", 'DateTime'>
    readonly cliente_id: FieldRef<"Pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido findRaw
   */
  export type PedidoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pedido aggregateRaw
   */
  export type PedidoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    num_item: number | null
    quantidade: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    num_item: number | null
    quantidade: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: string | null
    num_item: number | null
    quantidade: number | null
    produto_id: string | null
    pedido_id: string | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: string | null
    num_item: number | null
    quantidade: number | null
    produto_id: string | null
    pedido_id: string | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    num_item: number
    quantidade: number
    produto_id: number
    pedido_id: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    num_item?: true
    quantidade?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    num_item?: true
    quantidade?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    num_item?: true
    quantidade?: true
    produto_id?: true
    pedido_id?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    num_item?: true
    quantidade?: true
    produto_id?: true
    pedido_id?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    num_item?: true
    quantidade?: true
    produto_id?: true
    pedido_id?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: string
    num_item: number
    quantidade: number
    produto_id: string
    pedido_id: string
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_item?: boolean
    quantidade?: boolean
    produto_id?: boolean
    pedido_id?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>



  export type ItemPedidoSelectScalar = {
    id?: boolean
    num_item?: boolean
    quantidade?: boolean
    produto_id?: boolean
    pedido_id?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "num_item" | "quantidade" | "produto_id" | "pedido_id", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      num_item: number
      quantidade: number
      produto_id: string
      pedido_id: string
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * @param {ItemPedidoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const itemPedido = await prisma.itemPedido.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ItemPedidoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ItemPedido.
     * @param {ItemPedidoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const itemPedido = await prisma.itemPedido.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ItemPedidoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'String'>
    readonly num_item: FieldRef<"ItemPedido", 'Int'>
    readonly quantidade: FieldRef<"ItemPedido", 'Float'>
    readonly produto_id: FieldRef<"ItemPedido", 'String'>
    readonly pedido_id: FieldRef<"ItemPedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido findRaw
   */
  export type ItemPedidoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ItemPedido aggregateRaw
   */
  export type ItemPedidoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model Movimentacao
   */

  export type AggregateMovimentacao = {
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  export type MovimentacaoAvgAggregateOutputType = {
    qtd_movimentacao: number | null
  }

  export type MovimentacaoSumAggregateOutputType = {
    qtd_movimentacao: number | null
  }

  export type MovimentacaoMinAggregateOutputType = {
    id: string | null
    produto_id: string | null
    tipo: string | null
    qtd_movimentacao: number | null
    data: Date | null
    usuario: string | null
  }

  export type MovimentacaoMaxAggregateOutputType = {
    id: string | null
    produto_id: string | null
    tipo: string | null
    qtd_movimentacao: number | null
    data: Date | null
    usuario: string | null
  }

  export type MovimentacaoCountAggregateOutputType = {
    id: number
    produto_id: number
    tipo: number
    qtd_movimentacao: number
    data: number
    usuario: number
    _all: number
  }


  export type MovimentacaoAvgAggregateInputType = {
    qtd_movimentacao?: true
  }

  export type MovimentacaoSumAggregateInputType = {
    qtd_movimentacao?: true
  }

  export type MovimentacaoMinAggregateInputType = {
    id?: true
    produto_id?: true
    tipo?: true
    qtd_movimentacao?: true
    data?: true
    usuario?: true
  }

  export type MovimentacaoMaxAggregateInputType = {
    id?: true
    produto_id?: true
    tipo?: true
    qtd_movimentacao?: true
    data?: true
    usuario?: true
  }

  export type MovimentacaoCountAggregateInputType = {
    id?: true
    produto_id?: true
    tipo?: true
    qtd_movimentacao?: true
    data?: true
    usuario?: true
    _all?: true
  }

  export type MovimentacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacao to aggregate.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movimentacaos
    **/
    _count?: true | MovimentacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type GetMovimentacaoAggregateType<T extends MovimentacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacao[P]>
      : GetScalarType<T[P], AggregateMovimentacao[P]>
  }




  export type MovimentacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithAggregationInput | MovimentacaoOrderByWithAggregationInput[]
    by: MovimentacaoScalarFieldEnum[] | MovimentacaoScalarFieldEnum
    having?: MovimentacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoCountAggregateInputType | true
    _avg?: MovimentacaoAvgAggregateInputType
    _sum?: MovimentacaoSumAggregateInputType
    _min?: MovimentacaoMinAggregateInputType
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type MovimentacaoGroupByOutputType = {
    id: string
    produto_id: string
    tipo: string
    qtd_movimentacao: number
    data: Date
    usuario: string
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  type GetMovimentacaoGroupByPayload<T extends MovimentacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    tipo?: boolean
    qtd_movimentacao?: boolean
    data?: boolean
    usuario?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>



  export type MovimentacaoSelectScalar = {
    id?: boolean
    produto_id?: boolean
    tipo?: boolean
    qtd_movimentacao?: boolean
    data?: boolean
    usuario?: boolean
  }

  export type MovimentacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto_id" | "tipo" | "qtd_movimentacao" | "data" | "usuario", ExtArgs["result"]["movimentacao"]>
  export type MovimentacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $MovimentacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movimentacao"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      produto_id: string
      tipo: string
      qtd_movimentacao: number
      data: Date
      usuario: string
    }, ExtArgs["result"]["movimentacao"]>
    composites: {}
  }

  type MovimentacaoGetPayload<S extends boolean | null | undefined | MovimentacaoDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoPayload, S>

  type MovimentacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoCountAggregateInputType | true
    }

  export interface MovimentacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movimentacao'], meta: { name: 'Movimentacao' } }
    /**
     * Find zero or one Movimentacao that matches the filter.
     * @param {MovimentacaoFindUniqueArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoFindUniqueArgs>(args: SelectSubset<T, MovimentacaoFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimentacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoFindUniqueOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoFindFirstArgs>(args?: SelectSubset<T, MovimentacaoFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimentacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany()
     * 
     * // Get first 10 Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoFindManyArgs>(args?: SelectSubset<T, MovimentacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimentacao.
     * @param {MovimentacaoCreateArgs} args - Arguments to create a Movimentacao.
     * @example
     * // Create one Movimentacao
     * const Movimentacao = await prisma.movimentacao.create({
     *   data: {
     *     // ... data to create a Movimentacao
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoCreateArgs>(args: SelectSubset<T, MovimentacaoCreateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimentacaos.
     * @param {MovimentacaoCreateManyArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoCreateManyArgs>(args?: SelectSubset<T, MovimentacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movimentacao.
     * @param {MovimentacaoDeleteArgs} args - Arguments to delete one Movimentacao.
     * @example
     * // Delete one Movimentacao
     * const Movimentacao = await prisma.movimentacao.delete({
     *   where: {
     *     // ... filter to delete one Movimentacao
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoDeleteArgs>(args: SelectSubset<T, MovimentacaoDeleteArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimentacao.
     * @param {MovimentacaoUpdateArgs} args - Arguments to update one Movimentacao.
     * @example
     * // Update one Movimentacao
     * const movimentacao = await prisma.movimentacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoUpdateArgs>(args: SelectSubset<T, MovimentacaoUpdateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimentacaos.
     * @param {MovimentacaoDeleteManyArgs} args - Arguments to filter Movimentacaos to delete.
     * @example
     * // Delete a few Movimentacaos
     * const { count } = await prisma.movimentacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoUpdateManyArgs>(args: SelectSubset<T, MovimentacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movimentacao.
     * @param {MovimentacaoUpsertArgs} args - Arguments to update or create a Movimentacao.
     * @example
     * // Update or create a Movimentacao
     * const movimentacao = await prisma.movimentacao.upsert({
     *   create: {
     *     // ... data to create a Movimentacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimentacao we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoUpsertArgs>(args: SelectSubset<T, MovimentacaoUpsertArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimentacaos that matches the filter.
     * @param {MovimentacaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movimentacao = await prisma.movimentacao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MovimentacaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Movimentacao.
     * @param {MovimentacaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movimentacao = await prisma.movimentacao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MovimentacaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCountArgs} args - Arguments to filter Movimentacaos to count.
     * @example
     * // Count the number of Movimentacaos
     * const count = await prisma.movimentacao.count({
     *   where: {
     *     // ... the filter for the Movimentacaos we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoCountArgs>(
      args?: Subset<T, MovimentacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimentacaoAggregateArgs>(args: Subset<T, MovimentacaoAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoAggregateType<T>>

    /**
     * Group by Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovimentacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovimentacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movimentacao model
   */
  readonly fields: MovimentacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movimentacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movimentacao model
   */
  interface MovimentacaoFieldRefs {
    readonly id: FieldRef<"Movimentacao", 'String'>
    readonly produto_id: FieldRef<"Movimentacao", 'String'>
    readonly tipo: FieldRef<"Movimentacao", 'String'>
    readonly qtd_movimentacao: FieldRef<"Movimentacao", 'Float'>
    readonly data: FieldRef<"Movimentacao", 'DateTime'>
    readonly usuario: FieldRef<"Movimentacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movimentacao findUnique
   */
  export type MovimentacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findUniqueOrThrow
   */
  export type MovimentacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findFirst
   */
  export type MovimentacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findFirstOrThrow
   */
  export type MovimentacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findMany
   */
  export type MovimentacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacaos to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao create
   */
  export type MovimentacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Movimentacao.
     */
    data: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
  }

  /**
   * Movimentacao createMany
   */
  export type MovimentacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
  }

  /**
   * Movimentacao update
   */
  export type MovimentacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Movimentacao.
     */
    data: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
    /**
     * Choose, which Movimentacao to update.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao updateMany
   */
  export type MovimentacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
  }

  /**
   * Movimentacao upsert
   */
  export type MovimentacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Movimentacao to update in case it exists.
     */
    where: MovimentacaoWhereUniqueInput
    /**
     * In case the Movimentacao found by the `where` argument doesn't exist, create a new Movimentacao with this data.
     */
    create: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
    /**
     * In case the Movimentacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
  }

  /**
   * Movimentacao delete
   */
  export type MovimentacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter which Movimentacao to delete.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao deleteMany
   */
  export type MovimentacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacaos to delete
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to delete.
     */
    limit?: number
  }

  /**
   * Movimentacao findRaw
   */
  export type MovimentacaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Movimentacao aggregateRaw
   */
  export type MovimentacaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Movimentacao without action
   */
  export type MovimentacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
  }


  /**
   * Model Reposicao
   */

  export type AggregateReposicao = {
    _count: ReposicaoCountAggregateOutputType | null
    _avg: ReposicaoAvgAggregateOutputType | null
    _sum: ReposicaoSumAggregateOutputType | null
    _min: ReposicaoMinAggregateOutputType | null
    _max: ReposicaoMaxAggregateOutputType | null
  }

  export type ReposicaoAvgAggregateOutputType = {
    qtd_sugerida: number | null
  }

  export type ReposicaoSumAggregateOutputType = {
    qtd_sugerida: number | null
  }

  export type ReposicaoMinAggregateOutputType = {
    id: string | null
    produto_id: string | null
    fornecedor_id: string | null
    qtd_sugerida: number | null
    data_geracao: Date | null
    status: string | null
  }

  export type ReposicaoMaxAggregateOutputType = {
    id: string | null
    produto_id: string | null
    fornecedor_id: string | null
    qtd_sugerida: number | null
    data_geracao: Date | null
    status: string | null
  }

  export type ReposicaoCountAggregateOutputType = {
    id: number
    produto_id: number
    fornecedor_id: number
    qtd_sugerida: number
    data_geracao: number
    status: number
    _all: number
  }


  export type ReposicaoAvgAggregateInputType = {
    qtd_sugerida?: true
  }

  export type ReposicaoSumAggregateInputType = {
    qtd_sugerida?: true
  }

  export type ReposicaoMinAggregateInputType = {
    id?: true
    produto_id?: true
    fornecedor_id?: true
    qtd_sugerida?: true
    data_geracao?: true
    status?: true
  }

  export type ReposicaoMaxAggregateInputType = {
    id?: true
    produto_id?: true
    fornecedor_id?: true
    qtd_sugerida?: true
    data_geracao?: true
    status?: true
  }

  export type ReposicaoCountAggregateInputType = {
    id?: true
    produto_id?: true
    fornecedor_id?: true
    qtd_sugerida?: true
    data_geracao?: true
    status?: true
    _all?: true
  }

  export type ReposicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reposicao to aggregate.
     */
    where?: ReposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reposicaos to fetch.
     */
    orderBy?: ReposicaoOrderByWithRelationInput | ReposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reposicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reposicaos
    **/
    _count?: true | ReposicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReposicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReposicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReposicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReposicaoMaxAggregateInputType
  }

  export type GetReposicaoAggregateType<T extends ReposicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateReposicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReposicao[P]>
      : GetScalarType<T[P], AggregateReposicao[P]>
  }




  export type ReposicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReposicaoWhereInput
    orderBy?: ReposicaoOrderByWithAggregationInput | ReposicaoOrderByWithAggregationInput[]
    by: ReposicaoScalarFieldEnum[] | ReposicaoScalarFieldEnum
    having?: ReposicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReposicaoCountAggregateInputType | true
    _avg?: ReposicaoAvgAggregateInputType
    _sum?: ReposicaoSumAggregateInputType
    _min?: ReposicaoMinAggregateInputType
    _max?: ReposicaoMaxAggregateInputType
  }

  export type ReposicaoGroupByOutputType = {
    id: string
    produto_id: string
    fornecedor_id: string
    qtd_sugerida: number
    data_geracao: Date
    status: string
    _count: ReposicaoCountAggregateOutputType | null
    _avg: ReposicaoAvgAggregateOutputType | null
    _sum: ReposicaoSumAggregateOutputType | null
    _min: ReposicaoMinAggregateOutputType | null
    _max: ReposicaoMaxAggregateOutputType | null
  }

  type GetReposicaoGroupByPayload<T extends ReposicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReposicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReposicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReposicaoGroupByOutputType[P]>
            : GetScalarType<T[P], ReposicaoGroupByOutputType[P]>
        }
      >
    >


  export type ReposicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    fornecedor_id?: boolean
    qtd_sugerida?: boolean
    data_geracao?: boolean
    status?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reposicao"]>



  export type ReposicaoSelectScalar = {
    id?: boolean
    produto_id?: boolean
    fornecedor_id?: boolean
    qtd_sugerida?: boolean
    data_geracao?: boolean
    status?: boolean
  }

  export type ReposicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto_id" | "fornecedor_id" | "qtd_sugerida" | "data_geracao" | "status", ExtArgs["result"]["reposicao"]>
  export type ReposicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
  }

  export type $ReposicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reposicao"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      fornecedor: Prisma.$FornecedorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      produto_id: string
      fornecedor_id: string
      qtd_sugerida: number
      data_geracao: Date
      status: string
    }, ExtArgs["result"]["reposicao"]>
    composites: {}
  }

  type ReposicaoGetPayload<S extends boolean | null | undefined | ReposicaoDefaultArgs> = $Result.GetResult<Prisma.$ReposicaoPayload, S>

  type ReposicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReposicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReposicaoCountAggregateInputType | true
    }

  export interface ReposicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reposicao'], meta: { name: 'Reposicao' } }
    /**
     * Find zero or one Reposicao that matches the filter.
     * @param {ReposicaoFindUniqueArgs} args - Arguments to find a Reposicao
     * @example
     * // Get one Reposicao
     * const reposicao = await prisma.reposicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReposicaoFindUniqueArgs>(args: SelectSubset<T, ReposicaoFindUniqueArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reposicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReposicaoFindUniqueOrThrowArgs} args - Arguments to find a Reposicao
     * @example
     * // Get one Reposicao
     * const reposicao = await prisma.reposicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReposicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReposicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reposicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposicaoFindFirstArgs} args - Arguments to find a Reposicao
     * @example
     * // Get one Reposicao
     * const reposicao = await prisma.reposicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReposicaoFindFirstArgs>(args?: SelectSubset<T, ReposicaoFindFirstArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reposicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposicaoFindFirstOrThrowArgs} args - Arguments to find a Reposicao
     * @example
     * // Get one Reposicao
     * const reposicao = await prisma.reposicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReposicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReposicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reposicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reposicaos
     * const reposicaos = await prisma.reposicao.findMany()
     * 
     * // Get first 10 Reposicaos
     * const reposicaos = await prisma.reposicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reposicaoWithIdOnly = await prisma.reposicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReposicaoFindManyArgs>(args?: SelectSubset<T, ReposicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reposicao.
     * @param {ReposicaoCreateArgs} args - Arguments to create a Reposicao.
     * @example
     * // Create one Reposicao
     * const Reposicao = await prisma.reposicao.create({
     *   data: {
     *     // ... data to create a Reposicao
     *   }
     * })
     * 
     */
    create<T extends ReposicaoCreateArgs>(args: SelectSubset<T, ReposicaoCreateArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reposicaos.
     * @param {ReposicaoCreateManyArgs} args - Arguments to create many Reposicaos.
     * @example
     * // Create many Reposicaos
     * const reposicao = await prisma.reposicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReposicaoCreateManyArgs>(args?: SelectSubset<T, ReposicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reposicao.
     * @param {ReposicaoDeleteArgs} args - Arguments to delete one Reposicao.
     * @example
     * // Delete one Reposicao
     * const Reposicao = await prisma.reposicao.delete({
     *   where: {
     *     // ... filter to delete one Reposicao
     *   }
     * })
     * 
     */
    delete<T extends ReposicaoDeleteArgs>(args: SelectSubset<T, ReposicaoDeleteArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reposicao.
     * @param {ReposicaoUpdateArgs} args - Arguments to update one Reposicao.
     * @example
     * // Update one Reposicao
     * const reposicao = await prisma.reposicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReposicaoUpdateArgs>(args: SelectSubset<T, ReposicaoUpdateArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reposicaos.
     * @param {ReposicaoDeleteManyArgs} args - Arguments to filter Reposicaos to delete.
     * @example
     * // Delete a few Reposicaos
     * const { count } = await prisma.reposicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReposicaoDeleteManyArgs>(args?: SelectSubset<T, ReposicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reposicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reposicaos
     * const reposicao = await prisma.reposicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReposicaoUpdateManyArgs>(args: SelectSubset<T, ReposicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reposicao.
     * @param {ReposicaoUpsertArgs} args - Arguments to update or create a Reposicao.
     * @example
     * // Update or create a Reposicao
     * const reposicao = await prisma.reposicao.upsert({
     *   create: {
     *     // ... data to create a Reposicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reposicao we want to update
     *   }
     * })
     */
    upsert<T extends ReposicaoUpsertArgs>(args: SelectSubset<T, ReposicaoUpsertArgs<ExtArgs>>): Prisma__ReposicaoClient<$Result.GetResult<Prisma.$ReposicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reposicaos that matches the filter.
     * @param {ReposicaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reposicao = await prisma.reposicao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReposicaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Reposicao.
     * @param {ReposicaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reposicao = await prisma.reposicao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReposicaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reposicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposicaoCountArgs} args - Arguments to filter Reposicaos to count.
     * @example
     * // Count the number of Reposicaos
     * const count = await prisma.reposicao.count({
     *   where: {
     *     // ... the filter for the Reposicaos we want to count
     *   }
     * })
    **/
    count<T extends ReposicaoCountArgs>(
      args?: Subset<T, ReposicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReposicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reposicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReposicaoAggregateArgs>(args: Subset<T, ReposicaoAggregateArgs>): Prisma.PrismaPromise<GetReposicaoAggregateType<T>>

    /**
     * Group by Reposicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReposicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReposicaoGroupByArgs['orderBy'] }
        : { orderBy?: ReposicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReposicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReposicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reposicao model
   */
  readonly fields: ReposicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reposicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReposicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fornecedor<T extends FornecedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FornecedorDefaultArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reposicao model
   */
  interface ReposicaoFieldRefs {
    readonly id: FieldRef<"Reposicao", 'String'>
    readonly produto_id: FieldRef<"Reposicao", 'String'>
    readonly fornecedor_id: FieldRef<"Reposicao", 'String'>
    readonly qtd_sugerida: FieldRef<"Reposicao", 'Float'>
    readonly data_geracao: FieldRef<"Reposicao", 'DateTime'>
    readonly status: FieldRef<"Reposicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reposicao findUnique
   */
  export type ReposicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * Filter, which Reposicao to fetch.
     */
    where: ReposicaoWhereUniqueInput
  }

  /**
   * Reposicao findUniqueOrThrow
   */
  export type ReposicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * Filter, which Reposicao to fetch.
     */
    where: ReposicaoWhereUniqueInput
  }

  /**
   * Reposicao findFirst
   */
  export type ReposicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * Filter, which Reposicao to fetch.
     */
    where?: ReposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reposicaos to fetch.
     */
    orderBy?: ReposicaoOrderByWithRelationInput | ReposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reposicaos.
     */
    cursor?: ReposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reposicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reposicaos.
     */
    distinct?: ReposicaoScalarFieldEnum | ReposicaoScalarFieldEnum[]
  }

  /**
   * Reposicao findFirstOrThrow
   */
  export type ReposicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * Filter, which Reposicao to fetch.
     */
    where?: ReposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reposicaos to fetch.
     */
    orderBy?: ReposicaoOrderByWithRelationInput | ReposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reposicaos.
     */
    cursor?: ReposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reposicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reposicaos.
     */
    distinct?: ReposicaoScalarFieldEnum | ReposicaoScalarFieldEnum[]
  }

  /**
   * Reposicao findMany
   */
  export type ReposicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * Filter, which Reposicaos to fetch.
     */
    where?: ReposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reposicaos to fetch.
     */
    orderBy?: ReposicaoOrderByWithRelationInput | ReposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reposicaos.
     */
    cursor?: ReposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reposicaos.
     */
    skip?: number
    distinct?: ReposicaoScalarFieldEnum | ReposicaoScalarFieldEnum[]
  }

  /**
   * Reposicao create
   */
  export type ReposicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Reposicao.
     */
    data: XOR<ReposicaoCreateInput, ReposicaoUncheckedCreateInput>
  }

  /**
   * Reposicao createMany
   */
  export type ReposicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reposicaos.
     */
    data: ReposicaoCreateManyInput | ReposicaoCreateManyInput[]
  }

  /**
   * Reposicao update
   */
  export type ReposicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Reposicao.
     */
    data: XOR<ReposicaoUpdateInput, ReposicaoUncheckedUpdateInput>
    /**
     * Choose, which Reposicao to update.
     */
    where: ReposicaoWhereUniqueInput
  }

  /**
   * Reposicao updateMany
   */
  export type ReposicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reposicaos.
     */
    data: XOR<ReposicaoUpdateManyMutationInput, ReposicaoUncheckedUpdateManyInput>
    /**
     * Filter which Reposicaos to update
     */
    where?: ReposicaoWhereInput
    /**
     * Limit how many Reposicaos to update.
     */
    limit?: number
  }

  /**
   * Reposicao upsert
   */
  export type ReposicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Reposicao to update in case it exists.
     */
    where: ReposicaoWhereUniqueInput
    /**
     * In case the Reposicao found by the `where` argument doesn't exist, create a new Reposicao with this data.
     */
    create: XOR<ReposicaoCreateInput, ReposicaoUncheckedCreateInput>
    /**
     * In case the Reposicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReposicaoUpdateInput, ReposicaoUncheckedUpdateInput>
  }

  /**
   * Reposicao delete
   */
  export type ReposicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
    /**
     * Filter which Reposicao to delete.
     */
    where: ReposicaoWhereUniqueInput
  }

  /**
   * Reposicao deleteMany
   */
  export type ReposicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reposicaos to delete
     */
    where?: ReposicaoWhereInput
    /**
     * Limit how many Reposicaos to delete.
     */
    limit?: number
  }

  /**
   * Reposicao findRaw
   */
  export type ReposicaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Reposicao aggregateRaw
   */
  export type ReposicaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Reposicao without action
   */
  export type ReposicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reposicao
     */
    select?: ReposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reposicao
     */
    omit?: ReposicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposicaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CounterScalarFieldEnum: {
    id: 'id',
    seq: 'seq'
  };

  export type CounterScalarFieldEnum = (typeof CounterScalarFieldEnum)[keyof typeof CounterScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
    id: 'id',
    razao_social: 'razao_social',
    nome_fantasia: 'nome_fantasia',
    cnpj: 'cnpj',
    email: 'email',
    logradouro: 'logradouro',
    num_imovel: 'num_imovel',
    complemento: 'complemento',
    bairro: 'bairro',
    municipio: 'municipio',
    uf: 'uf',
    cep: 'cep',
    telefone: 'telefone'
  };

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    marca: 'marca',
    detalhes: 'detalhes',
    quantidade: 'quantidade',
    unidade_medida: 'unidade_medida',
    preco_unitario: 'preco_unitario',
    qtd_estoque: 'qtd_estoque',
    categoria_ids: 'categoria_ids',
    fornecedor_ids: 'fornecedor_ids'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    data_nascimento: 'data_nascimento',
    email: 'email',
    logradouro: 'logradouro',
    num_imovel: 'num_imovel',
    complemento: 'complemento',
    bairro: 'bairro',
    municipio: 'municipio',
    uf: 'uf',
    cep: 'cep',
    celular: 'celular'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    num_pedido: 'num_pedido',
    data_hora: 'data_hora',
    cliente_id: 'cliente_id'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    num_item: 'num_item',
    quantidade: 'quantidade',
    produto_id: 'produto_id',
    pedido_id: 'pedido_id'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const MovimentacaoScalarFieldEnum: {
    id: 'id',
    produto_id: 'produto_id',
    tipo: 'tipo',
    qtd_movimentacao: 'qtd_movimentacao',
    data: 'data',
    usuario: 'usuario'
  };

  export type MovimentacaoScalarFieldEnum = (typeof MovimentacaoScalarFieldEnum)[keyof typeof MovimentacaoScalarFieldEnum]


  export const ReposicaoScalarFieldEnum: {
    id: 'id',
    produto_id: 'produto_id',
    fornecedor_id: 'fornecedor_id',
    qtd_sugerida: 'qtd_sugerida',
    data_geracao: 'data_geracao',
    status: 'status'
  };

  export type ReposicaoScalarFieldEnum = (typeof ReposicaoScalarFieldEnum)[keyof typeof ReposicaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type CounterWhereInput = {
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    id?: StringFilter<"Counter"> | string
    seq?: IntFilter<"Counter"> | number
  }

  export type CounterOrderByWithRelationInput = {
    id?: SortOrder
    seq?: SortOrder
  }

  export type CounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    seq?: IntFilter<"Counter"> | number
  }, "id">

  export type CounterOrderByWithAggregationInput = {
    id?: SortOrder
    seq?: SortOrder
    _count?: CounterCountOrderByAggregateInput
    _avg?: CounterAvgOrderByAggregateInput
    _max?: CounterMaxOrderByAggregateInput
    _min?: CounterMinOrderByAggregateInput
    _sum?: CounterSumOrderByAggregateInput
  }

  export type CounterScalarWhereWithAggregatesInput = {
    AND?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    OR?: CounterScalarWhereWithAggregatesInput[]
    NOT?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Counter"> | string
    seq?: IntWithAggregatesFilter<"Counter"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    descricao?: StringFilter<"Categoria"> | string
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descricao?: StringFilter<"Categoria"> | string
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type FornecedorWhereInput = {
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    id?: StringFilter<"Fornecedor"> | string
    razao_social?: StringFilter<"Fornecedor"> | string
    nome_fantasia?: StringNullableFilter<"Fornecedor"> | string | null
    cnpj?: StringFilter<"Fornecedor"> | string
    email?: StringFilter<"Fornecedor"> | string
    logradouro?: StringFilter<"Fornecedor"> | string
    num_imovel?: StringFilter<"Fornecedor"> | string
    complemento?: StringNullableFilter<"Fornecedor"> | string | null
    bairro?: StringFilter<"Fornecedor"> | string
    municipio?: StringFilter<"Fornecedor"> | string
    uf?: StringFilter<"Fornecedor"> | string
    cep?: StringFilter<"Fornecedor"> | string
    telefone?: StringFilter<"Fornecedor"> | string
    reposicoes?: ReposicaoListRelationFilter
  }

  export type FornecedorOrderByWithRelationInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    reposicoes?: ReposicaoOrderByRelationAggregateInput
  }

  export type FornecedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    email?: string
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    razao_social?: StringFilter<"Fornecedor"> | string
    nome_fantasia?: StringNullableFilter<"Fornecedor"> | string | null
    logradouro?: StringFilter<"Fornecedor"> | string
    num_imovel?: StringFilter<"Fornecedor"> | string
    complemento?: StringNullableFilter<"Fornecedor"> | string | null
    bairro?: StringFilter<"Fornecedor"> | string
    municipio?: StringFilter<"Fornecedor"> | string
    uf?: StringFilter<"Fornecedor"> | string
    cep?: StringFilter<"Fornecedor"> | string
    telefone?: StringFilter<"Fornecedor"> | string
    reposicoes?: ReposicaoListRelationFilter
  }, "id" | "cnpj" | "email">

  export type FornecedorOrderByWithAggregationInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    _count?: FornecedorCountOrderByAggregateInput
    _max?: FornecedorMaxOrderByAggregateInput
    _min?: FornecedorMinOrderByAggregateInput
  }

  export type FornecedorScalarWhereWithAggregatesInput = {
    AND?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    OR?: FornecedorScalarWhereWithAggregatesInput[]
    NOT?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fornecedor"> | string
    razao_social?: StringWithAggregatesFilter<"Fornecedor"> | string
    nome_fantasia?: StringNullableWithAggregatesFilter<"Fornecedor"> | string | null
    cnpj?: StringWithAggregatesFilter<"Fornecedor"> | string
    email?: StringWithAggregatesFilter<"Fornecedor"> | string
    logradouro?: StringWithAggregatesFilter<"Fornecedor"> | string
    num_imovel?: StringWithAggregatesFilter<"Fornecedor"> | string
    complemento?: StringNullableWithAggregatesFilter<"Fornecedor"> | string | null
    bairro?: StringWithAggregatesFilter<"Fornecedor"> | string
    municipio?: StringWithAggregatesFilter<"Fornecedor"> | string
    uf?: StringWithAggregatesFilter<"Fornecedor"> | string
    cep?: StringWithAggregatesFilter<"Fornecedor"> | string
    telefone?: StringWithAggregatesFilter<"Fornecedor"> | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    marca?: StringFilter<"Produto"> | string
    detalhes?: StringNullableFilter<"Produto"> | string | null
    quantidade?: FloatFilter<"Produto"> | number
    unidade_medida?: StringFilter<"Produto"> | string
    preco_unitario?: FloatFilter<"Produto"> | number
    qtd_estoque?: FloatFilter<"Produto"> | number
    categoria_ids?: StringNullableListFilter<"Produto">
    fornecedor_ids?: StringNullableListFilter<"Produto">
    itens?: ItemPedidoListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
    reposicoes?: ReposicaoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    detalhes?: SortOrder
    quantidade?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    qtd_estoque?: SortOrder
    categoria_ids?: SortOrder
    fornecedor_ids?: SortOrder
    itens?: ItemPedidoOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
    reposicoes?: ReposicaoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    marca?: StringFilter<"Produto"> | string
    detalhes?: StringNullableFilter<"Produto"> | string | null
    quantidade?: FloatFilter<"Produto"> | number
    unidade_medida?: StringFilter<"Produto"> | string
    preco_unitario?: FloatFilter<"Produto"> | number
    qtd_estoque?: FloatFilter<"Produto"> | number
    categoria_ids?: StringNullableListFilter<"Produto">
    fornecedor_ids?: StringNullableListFilter<"Produto">
    itens?: ItemPedidoListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
    reposicoes?: ReposicaoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    detalhes?: SortOrder
    quantidade?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    qtd_estoque?: SortOrder
    categoria_ids?: SortOrder
    fornecedor_ids?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produto"> | string
    nome?: StringWithAggregatesFilter<"Produto"> | string
    marca?: StringWithAggregatesFilter<"Produto"> | string
    detalhes?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    quantidade?: FloatWithAggregatesFilter<"Produto"> | number
    unidade_medida?: StringWithAggregatesFilter<"Produto"> | string
    preco_unitario?: FloatWithAggregatesFilter<"Produto"> | number
    qtd_estoque?: FloatWithAggregatesFilter<"Produto"> | number
    categoria_ids?: StringNullableListFilter<"Produto">
    fornecedor_ids?: StringNullableListFilter<"Produto">
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    data_nascimento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    email?: StringFilter<"Cliente"> | string
    logradouro?: StringFilter<"Cliente"> | string
    num_imovel?: StringFilter<"Cliente"> | string
    complemento?: StringNullableFilter<"Cliente"> | string | null
    bairro?: StringFilter<"Cliente"> | string
    municipio?: StringFilter<"Cliente"> | string
    uf?: StringFilter<"Cliente"> | string
    cep?: StringFilter<"Cliente"> | string
    celular?: StringFilter<"Cliente"> | string
    pedidos?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    celular?: SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    data_nascimento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    logradouro?: StringFilter<"Cliente"> | string
    num_imovel?: StringFilter<"Cliente"> | string
    complemento?: StringNullableFilter<"Cliente"> | string | null
    bairro?: StringFilter<"Cliente"> | string
    municipio?: StringFilter<"Cliente"> | string
    uf?: StringFilter<"Cliente"> | string
    cep?: StringFilter<"Cliente"> | string
    celular?: StringFilter<"Cliente"> | string
    pedidos?: PedidoListRelationFilter
  }, "id" | "cpf" | "email">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    celular?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    email?: StringWithAggregatesFilter<"Cliente"> | string
    logradouro?: StringWithAggregatesFilter<"Cliente"> | string
    num_imovel?: StringWithAggregatesFilter<"Cliente"> | string
    complemento?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    bairro?: StringWithAggregatesFilter<"Cliente"> | string
    municipio?: StringWithAggregatesFilter<"Cliente"> | string
    uf?: StringWithAggregatesFilter<"Cliente"> | string
    cep?: StringWithAggregatesFilter<"Cliente"> | string
    celular?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: StringFilter<"Pedido"> | string
    num_pedido?: IntFilter<"Pedido"> | number
    data_hora?: DateTimeFilter<"Pedido"> | Date | string
    cliente_id?: StringFilter<"Pedido"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: ItemPedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    num_pedido?: SortOrder
    data_hora?: SortOrder
    cliente_id?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    itens?: ItemPedidoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    num_pedido?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    data_hora?: DateTimeFilter<"Pedido"> | Date | string
    cliente_id?: StringFilter<"Pedido"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: ItemPedidoListRelationFilter
  }, "id" | "num_pedido">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    num_pedido?: SortOrder
    data_hora?: SortOrder
    cliente_id?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pedido"> | string
    num_pedido?: IntWithAggregatesFilter<"Pedido"> | number
    data_hora?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    cliente_id?: StringWithAggregatesFilter<"Pedido"> | string
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: StringFilter<"ItemPedido"> | string
    num_item?: IntFilter<"ItemPedido"> | number
    quantidade?: FloatFilter<"ItemPedido"> | number
    produto_id?: StringFilter<"ItemPedido"> | string
    pedido_id?: StringFilter<"ItemPedido"> | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    num_item?: SortOrder
    quantidade?: SortOrder
    produto_id?: SortOrder
    pedido_id?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pedido_id_num_item?: ItemPedidoPedido_idNum_itemCompoundUniqueInput
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    num_item?: IntFilter<"ItemPedido"> | number
    quantidade?: FloatFilter<"ItemPedido"> | number
    produto_id?: StringFilter<"ItemPedido"> | string
    pedido_id?: StringFilter<"ItemPedido"> | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id" | "pedido_id_num_item">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    num_item?: SortOrder
    quantidade?: SortOrder
    produto_id?: SortOrder
    pedido_id?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemPedido"> | string
    num_item?: IntWithAggregatesFilter<"ItemPedido"> | number
    quantidade?: FloatWithAggregatesFilter<"ItemPedido"> | number
    produto_id?: StringWithAggregatesFilter<"ItemPedido"> | string
    pedido_id?: StringWithAggregatesFilter<"ItemPedido"> | string
  }

  export type MovimentacaoWhereInput = {
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    id?: StringFilter<"Movimentacao"> | string
    produto_id?: StringFilter<"Movimentacao"> | string
    tipo?: StringFilter<"Movimentacao"> | string
    qtd_movimentacao?: FloatFilter<"Movimentacao"> | number
    data?: DateTimeFilter<"Movimentacao"> | Date | string
    usuario?: StringFilter<"Movimentacao"> | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type MovimentacaoOrderByWithRelationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    qtd_movimentacao?: SortOrder
    data?: SortOrder
    usuario?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
  }

  export type MovimentacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    produto_id?: StringFilter<"Movimentacao"> | string
    tipo?: StringFilter<"Movimentacao"> | string
    qtd_movimentacao?: FloatFilter<"Movimentacao"> | number
    data?: DateTimeFilter<"Movimentacao"> | Date | string
    usuario?: StringFilter<"Movimentacao"> | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id">

  export type MovimentacaoOrderByWithAggregationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    qtd_movimentacao?: SortOrder
    data?: SortOrder
    usuario?: SortOrder
    _count?: MovimentacaoCountOrderByAggregateInput
    _avg?: MovimentacaoAvgOrderByAggregateInput
    _max?: MovimentacaoMaxOrderByAggregateInput
    _min?: MovimentacaoMinOrderByAggregateInput
    _sum?: MovimentacaoSumOrderByAggregateInput
  }

  export type MovimentacaoScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movimentacao"> | string
    produto_id?: StringWithAggregatesFilter<"Movimentacao"> | string
    tipo?: StringWithAggregatesFilter<"Movimentacao"> | string
    qtd_movimentacao?: FloatWithAggregatesFilter<"Movimentacao"> | number
    data?: DateTimeWithAggregatesFilter<"Movimentacao"> | Date | string
    usuario?: StringWithAggregatesFilter<"Movimentacao"> | string
  }

  export type ReposicaoWhereInput = {
    AND?: ReposicaoWhereInput | ReposicaoWhereInput[]
    OR?: ReposicaoWhereInput[]
    NOT?: ReposicaoWhereInput | ReposicaoWhereInput[]
    id?: StringFilter<"Reposicao"> | string
    produto_id?: StringFilter<"Reposicao"> | string
    fornecedor_id?: StringFilter<"Reposicao"> | string
    qtd_sugerida?: FloatFilter<"Reposicao"> | number
    data_geracao?: DateTimeFilter<"Reposicao"> | Date | string
    status?: StringFilter<"Reposicao"> | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    fornecedor?: XOR<FornecedorScalarRelationFilter, FornecedorWhereInput>
  }

  export type ReposicaoOrderByWithRelationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    fornecedor_id?: SortOrder
    qtd_sugerida?: SortOrder
    data_geracao?: SortOrder
    status?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    fornecedor?: FornecedorOrderByWithRelationInput
  }

  export type ReposicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReposicaoWhereInput | ReposicaoWhereInput[]
    OR?: ReposicaoWhereInput[]
    NOT?: ReposicaoWhereInput | ReposicaoWhereInput[]
    produto_id?: StringFilter<"Reposicao"> | string
    fornecedor_id?: StringFilter<"Reposicao"> | string
    qtd_sugerida?: FloatFilter<"Reposicao"> | number
    data_geracao?: DateTimeFilter<"Reposicao"> | Date | string
    status?: StringFilter<"Reposicao"> | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    fornecedor?: XOR<FornecedorScalarRelationFilter, FornecedorWhereInput>
  }, "id">

  export type ReposicaoOrderByWithAggregationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    fornecedor_id?: SortOrder
    qtd_sugerida?: SortOrder
    data_geracao?: SortOrder
    status?: SortOrder
    _count?: ReposicaoCountOrderByAggregateInput
    _avg?: ReposicaoAvgOrderByAggregateInput
    _max?: ReposicaoMaxOrderByAggregateInput
    _min?: ReposicaoMinOrderByAggregateInput
    _sum?: ReposicaoSumOrderByAggregateInput
  }

  export type ReposicaoScalarWhereWithAggregatesInput = {
    AND?: ReposicaoScalarWhereWithAggregatesInput | ReposicaoScalarWhereWithAggregatesInput[]
    OR?: ReposicaoScalarWhereWithAggregatesInput[]
    NOT?: ReposicaoScalarWhereWithAggregatesInput | ReposicaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reposicao"> | string
    produto_id?: StringWithAggregatesFilter<"Reposicao"> | string
    fornecedor_id?: StringWithAggregatesFilter<"Reposicao"> | string
    qtd_sugerida?: FloatWithAggregatesFilter<"Reposicao"> | number
    data_geracao?: DateTimeWithAggregatesFilter<"Reposicao"> | Date | string
    status?: StringWithAggregatesFilter<"Reposicao"> | string
  }

  export type CounterCreateInput = {
    id: string
    seq: number
  }

  export type CounterUncheckedCreateInput = {
    id: string
    seq: number
  }

  export type CounterUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type CounterUncheckedUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type CounterCreateManyInput = {
    id: string
    seq: number
  }

  export type CounterUpdateManyMutationInput = {
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type CounterUncheckedUpdateManyInput = {
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    id?: string
    descricao: string
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    descricao: string
  }

  export type CategoriaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateManyInput = {
    id?: string
    descricao: string
  }

  export type CategoriaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type FornecedorCreateInput = {
    id?: string
    razao_social: string
    nome_fantasia?: string | null
    cnpj: string
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    telefone: string
    reposicoes?: ReposicaoCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateInput = {
    id?: string
    razao_social: string
    nome_fantasia?: string | null
    cnpj: string
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    telefone: string
    reposicoes?: ReposicaoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUpdateInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    reposicoes?: ReposicaoUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    reposicoes?: ReposicaoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorCreateManyInput = {
    id?: string
    razao_social: string
    nome_fantasia?: string | null
    cnpj: string
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    telefone: string
  }

  export type FornecedorUpdateManyMutationInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FornecedorUncheckedUpdateManyInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutProdutoInput
    reposicoes?: ReposicaoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutProdutoInput
    reposicoes?: ReposicaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutProdutoNestedInput
    reposicoes?: ReposicaoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutProdutoNestedInput
    reposicoes?: ReposicaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
  }

  export type ProdutoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    cpf: string
    data_nascimento?: Date | string | null
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    celular: string
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    cpf: string
    data_nascimento?: Date | string | null
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    celular: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    cpf: string
    data_nascimento?: Date | string | null
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    celular: string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
    cliente_id: string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: StringFieldUpdateOperationsInput | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
    cliente_id: string
  }

  export type PedidoUpdateManyMutationInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoCreateInput = {
    id?: string
    num_item: number
    quantidade: number
    produto: ProdutoCreateNestedOneWithoutItensInput
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: string
    num_item: number
    quantidade: number
    produto_id: string
    pedido_id: string
  }

  export type ItemPedidoUpdateInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    produto_id?: StringFieldUpdateOperationsInput | string
    pedido_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoCreateManyInput = {
    id?: string
    num_item: number
    quantidade: number
    produto_id: string
    pedido_id: string
  }

  export type ItemPedidoUpdateManyMutationInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    produto_id?: StringFieldUpdateOperationsInput | string
    pedido_id?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCreateInput = {
    id?: string
    tipo: string
    qtd_movimentacao: number
    data: Date | string
    usuario: string
    produto: ProdutoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateInput = {
    id?: string
    produto_id: string
    tipo: string
    qtd_movimentacao: number
    data: Date | string
    usuario: string
  }

  export type MovimentacaoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    qtd_movimentacao?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
    produto?: ProdutoUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    qtd_movimentacao?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCreateManyInput = {
    id?: string
    produto_id: string
    tipo: string
    qtd_movimentacao: number
    data: Date | string
    usuario: string
  }

  export type MovimentacaoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    qtd_movimentacao?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoUncheckedUpdateManyInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    qtd_movimentacao?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type ReposicaoCreateInput = {
    id?: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
    produto: ProdutoCreateNestedOneWithoutReposicoesInput
    fornecedor: FornecedorCreateNestedOneWithoutReposicoesInput
  }

  export type ReposicaoUncheckedCreateInput = {
    id?: string
    produto_id: string
    fornecedor_id: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
  }

  export type ReposicaoUpdateInput = {
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    produto?: ProdutoUpdateOneRequiredWithoutReposicoesNestedInput
    fornecedor?: FornecedorUpdateOneRequiredWithoutReposicoesNestedInput
  }

  export type ReposicaoUncheckedUpdateInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    fornecedor_id?: StringFieldUpdateOperationsInput | string
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReposicaoCreateManyInput = {
    id?: string
    produto_id: string
    fornecedor_id: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
  }

  export type ReposicaoUpdateManyMutationInput = {
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReposicaoUncheckedUpdateManyInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    fornecedor_id?: StringFieldUpdateOperationsInput | string
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CounterCountOrderByAggregateInput = {
    id?: SortOrder
    seq?: SortOrder
  }

  export type CounterAvgOrderByAggregateInput = {
    seq?: SortOrder
  }

  export type CounterMaxOrderByAggregateInput = {
    id?: SortOrder
    seq?: SortOrder
  }

  export type CounterMinOrderByAggregateInput = {
    id?: SortOrder
    seq?: SortOrder
  }

  export type CounterSumOrderByAggregateInput = {
    seq?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ReposicaoListRelationFilter = {
    every?: ReposicaoWhereInput
    some?: ReposicaoWhereInput
    none?: ReposicaoWhereInput
  }

  export type ReposicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FornecedorCountOrderByAggregateInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
  }

  export type FornecedorMaxOrderByAggregateInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
  }

  export type FornecedorMinOrderByAggregateInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type MovimentacaoListRelationFilter = {
    every?: MovimentacaoWhereInput
    some?: MovimentacaoWhereInput
    none?: MovimentacaoWhereInput
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    detalhes?: SortOrder
    quantidade?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    qtd_estoque?: SortOrder
    categoria_ids?: SortOrder
    fornecedor_ids?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    detalhes?: SortOrder
    quantidade?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    detalhes?: SortOrder
    quantidade?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    qtd_estoque?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    celular?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    celular?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    email?: SortOrder
    logradouro?: SortOrder
    num_imovel?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
    celular?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    num_pedido?: SortOrder
    data_hora?: SortOrder
    cliente_id?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    num_pedido?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    num_pedido?: SortOrder
    data_hora?: SortOrder
    cliente_id?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    num_pedido?: SortOrder
    data_hora?: SortOrder
    cliente_id?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    num_pedido?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ItemPedidoPedido_idNum_itemCompoundUniqueInput = {
    pedido_id: string
    num_item: number
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    num_item?: SortOrder
    quantidade?: SortOrder
    produto_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    num_item?: SortOrder
    quantidade?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    num_item?: SortOrder
    quantidade?: SortOrder
    produto_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    num_item?: SortOrder
    quantidade?: SortOrder
    produto_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    num_item?: SortOrder
    quantidade?: SortOrder
  }

  export type MovimentacaoCountOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    qtd_movimentacao?: SortOrder
    data?: SortOrder
    usuario?: SortOrder
  }

  export type MovimentacaoAvgOrderByAggregateInput = {
    qtd_movimentacao?: SortOrder
  }

  export type MovimentacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    qtd_movimentacao?: SortOrder
    data?: SortOrder
    usuario?: SortOrder
  }

  export type MovimentacaoMinOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo?: SortOrder
    qtd_movimentacao?: SortOrder
    data?: SortOrder
    usuario?: SortOrder
  }

  export type MovimentacaoSumOrderByAggregateInput = {
    qtd_movimentacao?: SortOrder
  }

  export type FornecedorScalarRelationFilter = {
    is?: FornecedorWhereInput
    isNot?: FornecedorWhereInput
  }

  export type ReposicaoCountOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    fornecedor_id?: SortOrder
    qtd_sugerida?: SortOrder
    data_geracao?: SortOrder
    status?: SortOrder
  }

  export type ReposicaoAvgOrderByAggregateInput = {
    qtd_sugerida?: SortOrder
  }

  export type ReposicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    fornecedor_id?: SortOrder
    qtd_sugerida?: SortOrder
    data_geracao?: SortOrder
    status?: SortOrder
  }

  export type ReposicaoMinOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    fornecedor_id?: SortOrder
    qtd_sugerida?: SortOrder
    data_geracao?: SortOrder
    status?: SortOrder
  }

  export type ReposicaoSumOrderByAggregateInput = {
    qtd_sugerida?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ReposicaoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ReposicaoCreateWithoutFornecedorInput, ReposicaoUncheckedCreateWithoutFornecedorInput> | ReposicaoCreateWithoutFornecedorInput[] | ReposicaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutFornecedorInput | ReposicaoCreateOrConnectWithoutFornecedorInput[]
    createMany?: ReposicaoCreateManyFornecedorInputEnvelope
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
  }

  export type ReposicaoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ReposicaoCreateWithoutFornecedorInput, ReposicaoUncheckedCreateWithoutFornecedorInput> | ReposicaoCreateWithoutFornecedorInput[] | ReposicaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutFornecedorInput | ReposicaoCreateOrConnectWithoutFornecedorInput[]
    createMany?: ReposicaoCreateManyFornecedorInputEnvelope
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ReposicaoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ReposicaoCreateWithoutFornecedorInput, ReposicaoUncheckedCreateWithoutFornecedorInput> | ReposicaoCreateWithoutFornecedorInput[] | ReposicaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutFornecedorInput | ReposicaoCreateOrConnectWithoutFornecedorInput[]
    upsert?: ReposicaoUpsertWithWhereUniqueWithoutFornecedorInput | ReposicaoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ReposicaoCreateManyFornecedorInputEnvelope
    set?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    disconnect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    delete?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    update?: ReposicaoUpdateWithWhereUniqueWithoutFornecedorInput | ReposicaoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ReposicaoUpdateManyWithWhereWithoutFornecedorInput | ReposicaoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ReposicaoScalarWhereInput | ReposicaoScalarWhereInput[]
  }

  export type ReposicaoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ReposicaoCreateWithoutFornecedorInput, ReposicaoUncheckedCreateWithoutFornecedorInput> | ReposicaoCreateWithoutFornecedorInput[] | ReposicaoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutFornecedorInput | ReposicaoCreateOrConnectWithoutFornecedorInput[]
    upsert?: ReposicaoUpsertWithWhereUniqueWithoutFornecedorInput | ReposicaoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ReposicaoCreateManyFornecedorInputEnvelope
    set?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    disconnect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    delete?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    update?: ReposicaoUpdateWithWhereUniqueWithoutFornecedorInput | ReposicaoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ReposicaoUpdateManyWithWhereWithoutFornecedorInput | ReposicaoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ReposicaoScalarWhereInput | ReposicaoScalarWhereInput[]
  }

  export type ProdutoCreatecategoria_idsInput = {
    set: string[]
  }

  export type ProdutoCreatefornecedor_idsInput = {
    set: string[]
  }

  export type ItemPedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type MovimentacaoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentacaoCreateWithoutProdutoInput, MovimentacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoCreateWithoutProdutoInput[] | MovimentacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProdutoInput | MovimentacaoCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentacaoCreateManyProdutoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type ReposicaoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ReposicaoCreateWithoutProdutoInput, ReposicaoUncheckedCreateWithoutProdutoInput> | ReposicaoCreateWithoutProdutoInput[] | ReposicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutProdutoInput | ReposicaoCreateOrConnectWithoutProdutoInput[]
    createMany?: ReposicaoCreateManyProdutoInputEnvelope
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentacaoCreateWithoutProdutoInput, MovimentacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoCreateWithoutProdutoInput[] | MovimentacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProdutoInput | MovimentacaoCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentacaoCreateManyProdutoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type ReposicaoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ReposicaoCreateWithoutProdutoInput, ReposicaoUncheckedCreateWithoutProdutoInput> | ReposicaoCreateWithoutProdutoInput[] | ReposicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutProdutoInput | ReposicaoCreateOrConnectWithoutProdutoInput[]
    createMany?: ReposicaoCreateManyProdutoInputEnvelope
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProdutoUpdatecategoria_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProdutoUpdatefornecedor_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ItemPedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type MovimentacaoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutProdutoInput, MovimentacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoCreateWithoutProdutoInput[] | MovimentacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProdutoInput | MovimentacaoCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutProdutoInput | MovimentacaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentacaoCreateManyProdutoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutProdutoInput | MovimentacaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutProdutoInput | MovimentacaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type ReposicaoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ReposicaoCreateWithoutProdutoInput, ReposicaoUncheckedCreateWithoutProdutoInput> | ReposicaoCreateWithoutProdutoInput[] | ReposicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutProdutoInput | ReposicaoCreateOrConnectWithoutProdutoInput[]
    upsert?: ReposicaoUpsertWithWhereUniqueWithoutProdutoInput | ReposicaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ReposicaoCreateManyProdutoInputEnvelope
    set?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    disconnect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    delete?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    update?: ReposicaoUpdateWithWhereUniqueWithoutProdutoInput | ReposicaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ReposicaoUpdateManyWithWhereWithoutProdutoInput | ReposicaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ReposicaoScalarWhereInput | ReposicaoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutProdutoInput, MovimentacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoCreateWithoutProdutoInput[] | MovimentacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProdutoInput | MovimentacaoCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutProdutoInput | MovimentacaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentacaoCreateManyProdutoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutProdutoInput | MovimentacaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutProdutoInput | MovimentacaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type ReposicaoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ReposicaoCreateWithoutProdutoInput, ReposicaoUncheckedCreateWithoutProdutoInput> | ReposicaoCreateWithoutProdutoInput[] | ReposicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReposicaoCreateOrConnectWithoutProdutoInput | ReposicaoCreateOrConnectWithoutProdutoInput[]
    upsert?: ReposicaoUpsertWithWhereUniqueWithoutProdutoInput | ReposicaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ReposicaoCreateManyProdutoInputEnvelope
    set?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    disconnect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    delete?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    connect?: ReposicaoWhereUniqueInput | ReposicaoWhereUniqueInput[]
    update?: ReposicaoUpdateWithWhereUniqueWithoutProdutoInput | ReposicaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ReposicaoUpdateManyWithWhereWithoutProdutoInput | ReposicaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ReposicaoScalarWhereInput | ReposicaoScalarWhereInput[]
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    upsert?: ClienteUpsertWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidosInput, ClienteUpdateWithoutPedidosInput>, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ProdutoCreateNestedOneWithoutItensInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    upsert?: ProdutoUpsertWithoutItensInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensInput, ProdutoUpdateWithoutItensInput>, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMovimentacoesInput
    connect?: ProdutoWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMovimentacoesInput
    upsert?: ProdutoUpsertWithoutMovimentacoesInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutMovimentacoesInput, ProdutoUpdateWithoutMovimentacoesInput>, ProdutoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ProdutoCreateNestedOneWithoutReposicoesInput = {
    create?: XOR<ProdutoCreateWithoutReposicoesInput, ProdutoUncheckedCreateWithoutReposicoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutReposicoesInput
    connect?: ProdutoWhereUniqueInput
  }

  export type FornecedorCreateNestedOneWithoutReposicoesInput = {
    create?: XOR<FornecedorCreateWithoutReposicoesInput, FornecedorUncheckedCreateWithoutReposicoesInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutReposicoesInput
    connect?: FornecedorWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutReposicoesNestedInput = {
    create?: XOR<ProdutoCreateWithoutReposicoesInput, ProdutoUncheckedCreateWithoutReposicoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutReposicoesInput
    upsert?: ProdutoUpsertWithoutReposicoesInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutReposicoesInput, ProdutoUpdateWithoutReposicoesInput>, ProdutoUncheckedUpdateWithoutReposicoesInput>
  }

  export type FornecedorUpdateOneRequiredWithoutReposicoesNestedInput = {
    create?: XOR<FornecedorCreateWithoutReposicoesInput, FornecedorUncheckedCreateWithoutReposicoesInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutReposicoesInput
    upsert?: FornecedorUpsertWithoutReposicoesInput
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutReposicoesInput, FornecedorUpdateWithoutReposicoesInput>, FornecedorUncheckedUpdateWithoutReposicoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReposicaoCreateWithoutFornecedorInput = {
    id?: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
    produto: ProdutoCreateNestedOneWithoutReposicoesInput
  }

  export type ReposicaoUncheckedCreateWithoutFornecedorInput = {
    id?: string
    produto_id: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
  }

  export type ReposicaoCreateOrConnectWithoutFornecedorInput = {
    where: ReposicaoWhereUniqueInput
    create: XOR<ReposicaoCreateWithoutFornecedorInput, ReposicaoUncheckedCreateWithoutFornecedorInput>
  }

  export type ReposicaoCreateManyFornecedorInputEnvelope = {
    data: ReposicaoCreateManyFornecedorInput | ReposicaoCreateManyFornecedorInput[]
  }

  export type ReposicaoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: ReposicaoWhereUniqueInput
    update: XOR<ReposicaoUpdateWithoutFornecedorInput, ReposicaoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<ReposicaoCreateWithoutFornecedorInput, ReposicaoUncheckedCreateWithoutFornecedorInput>
  }

  export type ReposicaoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: ReposicaoWhereUniqueInput
    data: XOR<ReposicaoUpdateWithoutFornecedorInput, ReposicaoUncheckedUpdateWithoutFornecedorInput>
  }

  export type ReposicaoUpdateManyWithWhereWithoutFornecedorInput = {
    where: ReposicaoScalarWhereInput
    data: XOR<ReposicaoUpdateManyMutationInput, ReposicaoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type ReposicaoScalarWhereInput = {
    AND?: ReposicaoScalarWhereInput | ReposicaoScalarWhereInput[]
    OR?: ReposicaoScalarWhereInput[]
    NOT?: ReposicaoScalarWhereInput | ReposicaoScalarWhereInput[]
    id?: StringFilter<"Reposicao"> | string
    produto_id?: StringFilter<"Reposicao"> | string
    fornecedor_id?: StringFilter<"Reposicao"> | string
    qtd_sugerida?: FloatFilter<"Reposicao"> | number
    data_geracao?: DateTimeFilter<"Reposicao"> | Date | string
    status?: StringFilter<"Reposicao"> | string
  }

  export type ItemPedidoCreateWithoutProdutoInput = {
    id?: string
    num_item: number
    quantidade: number
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutProdutoInput = {
    id?: string
    num_item: number
    quantidade: number
    pedido_id: string
  }

  export type ItemPedidoCreateOrConnectWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoCreateManyProdutoInputEnvelope = {
    data: ItemPedidoCreateManyProdutoInput | ItemPedidoCreateManyProdutoInput[]
  }

  export type MovimentacaoCreateWithoutProdutoInput = {
    id?: string
    tipo: string
    qtd_movimentacao: number
    data: Date | string
    usuario: string
  }

  export type MovimentacaoUncheckedCreateWithoutProdutoInput = {
    id?: string
    tipo: string
    qtd_movimentacao: number
    data: Date | string
    usuario: string
  }

  export type MovimentacaoCreateOrConnectWithoutProdutoInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutProdutoInput, MovimentacaoUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentacaoCreateManyProdutoInputEnvelope = {
    data: MovimentacaoCreateManyProdutoInput | MovimentacaoCreateManyProdutoInput[]
  }

  export type ReposicaoCreateWithoutProdutoInput = {
    id?: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
    fornecedor: FornecedorCreateNestedOneWithoutReposicoesInput
  }

  export type ReposicaoUncheckedCreateWithoutProdutoInput = {
    id?: string
    fornecedor_id: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
  }

  export type ReposicaoCreateOrConnectWithoutProdutoInput = {
    where: ReposicaoWhereUniqueInput
    create: XOR<ReposicaoCreateWithoutProdutoInput, ReposicaoUncheckedCreateWithoutProdutoInput>
  }

  export type ReposicaoCreateManyProdutoInputEnvelope = {
    data: ReposicaoCreateManyProdutoInput | ReposicaoCreateManyProdutoInput[]
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: StringFilter<"ItemPedido"> | string
    num_item?: IntFilter<"ItemPedido"> | number
    quantidade?: FloatFilter<"ItemPedido"> | number
    produto_id?: StringFilter<"ItemPedido"> | string
    pedido_id?: StringFilter<"ItemPedido"> | string
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutProdutoInput, MovimentacaoUncheckedUpdateWithoutProdutoInput>
    create: XOR<MovimentacaoCreateWithoutProdutoInput, MovimentacaoUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutProdutoInput, MovimentacaoUncheckedUpdateWithoutProdutoInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutProdutoInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type MovimentacaoScalarWhereInput = {
    AND?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    OR?: MovimentacaoScalarWhereInput[]
    NOT?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    id?: StringFilter<"Movimentacao"> | string
    produto_id?: StringFilter<"Movimentacao"> | string
    tipo?: StringFilter<"Movimentacao"> | string
    qtd_movimentacao?: FloatFilter<"Movimentacao"> | number
    data?: DateTimeFilter<"Movimentacao"> | Date | string
    usuario?: StringFilter<"Movimentacao"> | string
  }

  export type ReposicaoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ReposicaoWhereUniqueInput
    update: XOR<ReposicaoUpdateWithoutProdutoInput, ReposicaoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ReposicaoCreateWithoutProdutoInput, ReposicaoUncheckedCreateWithoutProdutoInput>
  }

  export type ReposicaoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ReposicaoWhereUniqueInput
    data: XOR<ReposicaoUpdateWithoutProdutoInput, ReposicaoUncheckedUpdateWithoutProdutoInput>
  }

  export type ReposicaoUpdateManyWithWhereWithoutProdutoInput = {
    where: ReposicaoScalarWhereInput
    data: XOR<ReposicaoUpdateManyMutationInput, ReposicaoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type PedidoCreateWithoutClienteInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: StringFilter<"Pedido"> | string
    num_pedido?: IntFilter<"Pedido"> | number
    data_hora?: DateTimeFilter<"Pedido"> | Date | string
    cliente_id?: StringFilter<"Pedido"> | string
  }

  export type ClienteCreateWithoutPedidosInput = {
    id?: string
    nome: string
    cpf: string
    data_nascimento?: Date | string | null
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    celular: string
  }

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    id?: string
    nome: string
    cpf: string
    data_nascimento?: Date | string | null
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    celular: string
  }

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    id?: string
    num_item: number
    quantidade: number
    produto: ProdutoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: string
    num_item: number
    quantidade: number
    produto_id: string
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
  }

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ProdutoCreateWithoutItensInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    movimentacoes?: MovimentacaoCreateNestedManyWithoutProdutoInput
    reposicoes?: ReposicaoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutItensInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutProdutoInput
    reposicoes?: ReposicaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutItensInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
  }

  export type PedidoCreateWithoutItensInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
    cliente_id: string
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoUpsertWithoutItensInput = {
    update: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    movimentacoes?: MovimentacaoUpdateManyWithoutProdutoNestedInput
    reposicoes?: ReposicaoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutProdutoNestedInput
    reposicoes?: ReposicaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
    reposicoes?: ReposicaoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
    reposicoes?: ReposicaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutMovimentacoesInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
  }

  export type ProdutoUpsertWithoutMovimentacoesInput = {
    update: XOR<ProdutoUpdateWithoutMovimentacoesInput, ProdutoUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutMovimentacoesInput, ProdutoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ProdutoUpdateWithoutMovimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
    reposicoes?: ReposicaoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutMovimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
    reposicoes?: ReposicaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateWithoutReposicoesInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutReposicoesInput = {
    id?: string
    nome: string
    marca: string
    detalhes?: string | null
    quantidade: number
    unidade_medida: string
    preco_unitario: number
    qtd_estoque: number
    categoria_ids?: ProdutoCreatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoCreatefornecedor_idsInput | string[]
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutReposicoesInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutReposicoesInput, ProdutoUncheckedCreateWithoutReposicoesInput>
  }

  export type FornecedorCreateWithoutReposicoesInput = {
    id?: string
    razao_social: string
    nome_fantasia?: string | null
    cnpj: string
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    telefone: string
  }

  export type FornecedorUncheckedCreateWithoutReposicoesInput = {
    id?: string
    razao_social: string
    nome_fantasia?: string | null
    cnpj: string
    email: string
    logradouro: string
    num_imovel: string
    complemento?: string | null
    bairro: string
    municipio: string
    uf: string
    cep: string
    telefone: string
  }

  export type FornecedorCreateOrConnectWithoutReposicoesInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutReposicoesInput, FornecedorUncheckedCreateWithoutReposicoesInput>
  }

  export type ProdutoUpsertWithoutReposicoesInput = {
    update: XOR<ProdutoUpdateWithoutReposicoesInput, ProdutoUncheckedUpdateWithoutReposicoesInput>
    create: XOR<ProdutoCreateWithoutReposicoesInput, ProdutoUncheckedCreateWithoutReposicoesInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutReposicoesInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutReposicoesInput, ProdutoUncheckedUpdateWithoutReposicoesInput>
  }

  export type ProdutoUpdateWithoutReposicoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutReposicoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade_medida?: StringFieldUpdateOperationsInput | string
    preco_unitario?: FloatFieldUpdateOperationsInput | number
    qtd_estoque?: FloatFieldUpdateOperationsInput | number
    categoria_ids?: ProdutoUpdatecategoria_idsInput | string[]
    fornecedor_ids?: ProdutoUpdatefornecedor_idsInput | string[]
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type FornecedorUpsertWithoutReposicoesInput = {
    update: XOR<FornecedorUpdateWithoutReposicoesInput, FornecedorUncheckedUpdateWithoutReposicoesInput>
    create: XOR<FornecedorCreateWithoutReposicoesInput, FornecedorUncheckedCreateWithoutReposicoesInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutReposicoesInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutReposicoesInput, FornecedorUncheckedUpdateWithoutReposicoesInput>
  }

  export type FornecedorUpdateWithoutReposicoesInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type FornecedorUncheckedUpdateWithoutReposicoesInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    num_imovel?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type ReposicaoCreateManyFornecedorInput = {
    id?: string
    produto_id: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
  }

  export type ReposicaoUpdateWithoutFornecedorInput = {
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    produto?: ProdutoUpdateOneRequiredWithoutReposicoesNestedInput
  }

  export type ReposicaoUncheckedUpdateWithoutFornecedorInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReposicaoUncheckedUpdateManyWithoutFornecedorInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoCreateManyProdutoInput = {
    id?: string
    num_item: number
    quantidade: number
    pedido_id: string
  }

  export type MovimentacaoCreateManyProdutoInput = {
    id?: string
    tipo: string
    qtd_movimentacao: number
    data: Date | string
    usuario: string
  }

  export type ReposicaoCreateManyProdutoInput = {
    id?: string
    fornecedor_id: string
    qtd_sugerida: number
    data_geracao: Date | string
    status: string
  }

  export type ItemPedidoUpdateWithoutProdutoInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProdutoInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    pedido_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    pedido_id?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoUpdateWithoutProdutoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    qtd_movimentacao?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoUncheckedUpdateWithoutProdutoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    qtd_movimentacao?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoUncheckedUpdateManyWithoutProdutoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    qtd_movimentacao?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type ReposicaoUpdateWithoutProdutoInput = {
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutReposicoesNestedInput
  }

  export type ReposicaoUncheckedUpdateWithoutProdutoInput = {
    fornecedor_id?: StringFieldUpdateOperationsInput | string
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReposicaoUncheckedUpdateManyWithoutProdutoInput = {
    fornecedor_id?: StringFieldUpdateOperationsInput | string
    qtd_sugerida?: FloatFieldUpdateOperationsInput | number
    data_geracao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateManyClienteInput = {
    id?: string
    num_pedido: number
    data_hora?: Date | string
  }

  export type PedidoUpdateWithoutClienteInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    num_pedido?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: string
    num_item: number
    quantidade: number
    produto_id: string
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    produto_id?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    num_item?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    produto_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}