declare module 'nodejs-vitals/maths' {
  /**
   * Converts an angle in degrees into an
   * angle in radians
   * @param x The angle in degrees
   * @returns The same angle in radians
   * @example
   * ```javascript
   * degreesToRadians(180); // 3.1415... (PI)
   * ```
   */
  export function degreesToRadians(x: number): number;
  /**
   * Converts an angle in radians into an
   * angle in degrees
   * @param x The angle in radians
   * @returns The same angle in degrees
   * @example
   * ```javascript
   * radiansToDegrees(Math.PI); // 180
   * ```
   */
  export function radiansToDegrees(x: number): number;
  /**
   * In arithmetic, Euclidean division – or division with remainder –
   * is the process of dividing one integer by another, in a way that
   * produces an integer quotient and a natural number remainder
   * strictly smaller than the absolute value of the divisor.
   * [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_division)
   * @param a The dividend
   * @param b The divisor
   * @returns The quotient `q` and the remainder `r`
   * @example
   * ```javascript
   * euclidieanDivision(8, 2); // { q: 4, r: 0 }
   * euclidieanDivision(11, 2); // { q: 5, r: 1 }
   * ```
   */
  export function euclidieanDivision(
    a: number,
    b: number
  ): { q: number; r: number };
  /**
   * Finds for what value of x the given quadratic equation
   * gives 0.
   * tldr: Finds the roots
   *
   * In algebra, a quadratic equation is any equation that can be
   * rearranged in standard form as where x represents an unknown,
   * and a, b, and c represent known numbers, where a ≠ 0.
   * [Wikipedia](https://en.wikipedia.org/wiki/Quadratic_equation)
   * @param a a coefficient
   * @param b b coefficients
   * @param c c coefficients
   * @returns The root(s) of the equation, if existing
   * @example
   * ```javascript
   * const roots = solveQuadratic(4, 2, -2);
   *
   * console.log(roots); // { discriminant: 36, x1: -1, x2: 0.5 }
   * ```
   */
  export function solveQuadratic(
    a: number,
    b: number,
    c: number
  ):
    | { discriminant: number }
    | { discriminant: number; x: number }
    | { discriminant: number; x0: number; x1: number };
}
