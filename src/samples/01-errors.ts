/**
 * Copyright 2018 Angus.Fenying
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable:no-console

import * as Core from "../lib";

const errors = Core.getDefaultErrorHub();

const TEST_ERROR = errors.define(123, "TEST_ERROR", "This is a test error.");

console.error(JSON.stringify(new TEST_ERROR().toJSON(true), null, 2));

interface IMyErrorMetadata {

    source: string;
}

const myErrors = Core.createErrorHub();

/**
 * Type 1 of error.
 */
const MY_TEST_ERROR1 = myErrors.define<IMyErrorMetadata>(
    1,
    "MY_TEST_ERROR1",
    "Custom error 1"
);

/**
 * Type 2 of error.
 */
const MY_TEST_ERROR2 = myErrors.define<IMyErrorMetadata>(
    2,
    "MY_TEST_ERROR2",
    "Custom error 2"
);

console.error(JSON.stringify(new MY_TEST_ERROR1({
    "metadata": {
        "source": "hello"
    }
}).toJSON(true), null, 2));

if (Core.isError(new MY_TEST_ERROR2())) {

    console.log(MY_TEST_ERROR2.message);
}
