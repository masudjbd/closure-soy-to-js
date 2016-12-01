// This file was automatically generated from adminPages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ZEPHYR.Templates.Admin.
 */

if (typeof ZEPHYR == 'undefined') { var ZEPHYR = {}; }
if (typeof ZEPHYR.Templates == 'undefined') { ZEPHYR.Templates = {}; }
if (typeof ZEPHYR.Templates.Admin == 'undefined') { ZEPHYR.Templates.Admin = {}; }


ZEPHYR.Templates.Admin.editExecutionStatus = function(opt_data, opt_ignored) {
  return '<div class="executionStatus"><form action="#" id="editDialogForm" class="aui"><fieldset><div class="field-group"><label for="editExecutionStatus">Status<span class="aui-icon icon-required"> ' + soy.$$escapeHtml(opt_data.i18n['zephyr.required.label']) + '</span></label><input size="30" class="text" type="text" id="editExecutionStatus" name="editExecutionStatus" title=' + soy.$$escapeHtml(opt_data.i18n['execute.test.executionstatus.label']) + ' value="' + soy.$$escapeHtml(opt_data.data.status) + '" /></div><div class="field-group"><label for="editExecutionDescription">' + soy.$$escapeHtml(opt_data.i18n['zephyr.admin.plugin.execstatus.desc']) + '</label><input size="60" class="text long-field" type="text" id="editExecutionDescription" name="editExecutionDescription" title=' + soy.$$escapeHtml(opt_data.i18n['execute.test.execution.description']) + ' value="' + soy.$$escapeHtml(opt_data.data.description) + '" /></div><div class="field-group"><label for="d-fname">' + soy.$$escapeHtml(opt_data.i18n['zephyr.admin.plugin.execstatus.exec.color']) + '<span class="aui-icon icon-required"> ' + soy.$$escapeHtml(opt_data.i18n['zephyr.required.label']) + '</span></label><input size="40" value="' + soy.$$escapeHtml(opt_data.data.color) + '" class="text" type="text" id="dialogColorInput" size="40" name="statusColor" title=' + soy.$$escapeHtml(opt_data.i18n['zephyr.admin.plugin.execstatus.exec.color']) + ' /><span id="dialogColorSpan" class="colorSpan"></span></div></fieldset></form></div>';
};
if (goog.DEBUG) {
  ZEPHYR.Templates.Admin.editExecutionStatus.soyTemplateName = 'ZEPHYR.Templates.Admin.editExecutionStatus';
}


ZEPHYR.Templates.Admin.deleteExecutionStatus = function(opt_data, opt_ignored) {
  var output = '<ul class="aui-message warning deleteMsg"><li class="aui-icon icon-warning"></li><li>' + ZEPHYR.Messages.getText(['zephyr.admin.plugin.execstatus.delete.confirm.message', opt_data.execStatusCount]) + '</li></ul><ul class="selectExecutionStatus"><li>' + soy.$$escapeHtml(opt_data.i18n['zephyr.admin.plugin.execstatus.delete.matching.schedules']) + ' : </li><li><select id="executionStatusDropdownBox" name="executionStatusDropdownBox-dd" class="executionStatusDropdownBox" data-mappedid="' + soy.$$escapeHtml(opt_data.rowData[0].id) + '">';
  var dataList32 = opt_data.rowData;
  var dataListLen32 = dataList32.length;
  for (var dataIndex32 = 0; dataIndex32 < dataListLen32; dataIndex32++) {
    var dataData32 = dataList32[dataIndex32];
    output += '<option value="' + soy.$$escapeHtml(dataData32.id) + '">' + soy.$$escapeHtml(dataData32.name) + '</option>';
  }
  output += '</select></li></ul>';
  return output;
};
if (goog.DEBUG) {
  ZEPHYR.Templates.Admin.deleteExecutionStatus.soyTemplateName = 'ZEPHYR.Templates.Admin.deleteExecutionStatus';
}


ZEPHYR.Templates.Admin.deleteStepResultStatus = function(opt_data, opt_ignored) {
  var output = '<ul class="aui-message warning deleteMsg"><li class="aui-icon icon-warning"></li><li>' + ZEPHYR.Messages.getText(['zephyr.admin.plugin.stepresult.status.delete.confirm.message', opt_data.execStatusCount]) + '</li></ul><ul class="progress-bar-container"><div id="jobProgressBar" class="aui-progress-indicator" style="display: none;"><span class="aui-progress-indicator-value"> ' + soy.$$escapeHtml(opt_data.progress) + ' </span></div><div id="progressMsgDiv"></div></ul><ul class="selectExecutionStatus"><li>' + soy.$$escapeHtml(opt_data.i18n['zephyr.admin.plugin.stepresult.status.delete.matching.schedules']) + ' : </li><li><select id="executionStatusDropdownBox" name="executionStatusDropdownBox-dd" class="executionStatusDropdownBox" data-mappedid="' + soy.$$escapeHtml(opt_data.rowData[0].id) + '">';
  var dataList50 = opt_data.rowData;
  var dataListLen50 = dataList50.length;
  for (var dataIndex50 = 0; dataIndex50 < dataListLen50; dataIndex50++) {
    var dataData50 = dataList50[dataIndex50];
    output += '<option value="' + soy.$$escapeHtml(dataData50.id) + '">' + soy.$$escapeHtml(dataData50.name) + '</option>';
  }
  output += '</select></li></ul>';
  return output;
};
if (goog.DEBUG) {
  ZEPHYR.Templates.Admin.deleteStepResultStatus.soyTemplateName = 'ZEPHYR.Templates.Admin.deleteStepResultStatus';
}


ZEPHYR.Templates.Admin.renderTable = function(opt_data, opt_ignored) {
  var output = '';
  var dataList59 = opt_data.tableData;
  var dataListLen59 = dataList59.length;
  for (var dataIndex59 = 0; dataIndex59 < dataListLen59; dataIndex59++) {
    var dataData59 = dataList59[dataIndex59];
    output += '<tr data-id="' + soy.$$escapeHtml(dataData59.id) + '" data-type="' + soy.$$escapeHtml(dataData59.type) + '" data-name="' + soy.$$escapeHtml(dataData59.name) + '"><td headers="execution-status">' + soy.$$escapeHtml(dataData59.name) + '</td><td headers="execution-description">' + soy.$$escapeHtml(dataData59.description) + '</td><td headers="execution-color"><div class="executionColor" data-color="' + soy.$$escapeHtml(dataData59.color) + '"></div></td><td headers="execution-operations"><a class="edit" href="#">' + soy.$$escapeHtml(opt_data.i18n['zephyr.edit.button.title']) + '</a>' + ((dataData59.type == 1) ? '<a class="delete" href="#">' + soy.$$escapeHtml(opt_data.i18n['zephyr.delete.button.title']) + '</a>' : '') + '</td></tr>';
  }
  return output;
};
if (goog.DEBUG) {
  ZEPHYR.Templates.Admin.renderTable.soyTemplateName = 'ZEPHYR.Templates.Admin.renderTable';
}


ZEPHYR.Templates.Admin.renderColorPicker = function(opt_data, opt_ignored) {
  return '<div id=\'colorPickerCanvas\'><canvas width=\'192\' height=\'192\' id=\'canvas_picker\'></canvas></div>';
};
if (goog.DEBUG) {
  ZEPHYR.Templates.Admin.renderColorPicker.soyTemplateName = 'ZEPHYR.Templates.Admin.renderColorPicker';
}
