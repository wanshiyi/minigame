/*
 * WebGL Water
 * http://madebyevan.com/webgl-water/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */

function Cubemap(gl,images) {
  this.id = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.id);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  var id = this.id;
  images.xneg.onload = (function () {
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, id);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
  });
  images.xpos.onload = (function () {
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, id);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
  });
  images.yneg.onload = (function () {
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, id);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
  });
  images.zneg.onload = (function () {
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, id);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
  });
  images.zpos.onload = (function () {
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, id);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this);
  });
}

Cubemap.prototype.bind = function(gl,unit) {
    gl.activeTexture(gl.TEXTURE0 + (unit || 0));
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.id);
};

Cubemap.prototype.unbind = function(gl,unit) {
    gl.activeTexture(gl.TEXTURE0 + (unit || 0));
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
};

module.exports = Cubemap;