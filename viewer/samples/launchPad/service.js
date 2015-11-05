/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /* Cross-device launch pad */

weave.launchMethod = weave.launchOption.default;

var service = function() {
  weave.select('.showable[size="small"].touchable')
    .show('<button value="Calendar">Calendar</button>')
    .on('tap:button', function(event) {
      event.getDevice().show('launching app...');
      weave.select('.showable[size="normal"]')
        .show('retrieving calendar data...')
        .startApp('Calendar');
    });
};