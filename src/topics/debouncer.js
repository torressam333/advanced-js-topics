/**Debouncer is useful for limiting expensive network/server requests
 *
 * Example: We have an input field that does a location search
 * in the background. We don't want a GET request to be fired on every
 * key stroke.
 *
 * We can limit how often the request fires by implementing a debouncer
 */

const debouncer = ((time) => {}, time);
