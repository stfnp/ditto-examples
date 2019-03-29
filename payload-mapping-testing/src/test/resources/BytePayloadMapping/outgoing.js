/*
 * Copyright (c) 2019 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 */

function mapFromDittoProtocolMsg(
    namespace,
    id,
    group,
    channel,
    criterion,
    action,
    path,
    dittoHeaders,
    value
) {

    // ###
    // Insert your mapping logic here:
    // ###

    var buf = new ArrayBuffer(value.length);
    var bufView = new Uint8Array(buf);
    for (var i=0, strLen=value.length; i<strLen; i++) {
        bufView[i] = value.charCodeAt(i);
    }

    headers = dittoHeaders;
    textPayload = null;
    bytePayload =  buf;
    contentType = "application/octet-stream";


    return  Ditto.buildExternalMsg(
        headers,
        textPayload,
        bytePayload,
        contentType
    );
}
