// Copyright (c) 2023, anas and contributors
// For license information, please see license.txt

frappe.ui.form.on('CASES', {
 refresh: function(frm) {
  // Get the childtable.
  var childtable = frm.doc.money;

  // Calculate the sum of the values in the childtable.
  var sum_money = 0;
  for (var i = 0; i < childtable.length; i++) {
   sum_money += childtable[i].value_money;
  }

  // Set the value of the docktype field.
  frm.set_value('sum_money', sum_money);
 }
});

frappe.ui.form.on('CASES', {
 refresh: function(frm) {
 // Get the childtable.
 var childtable = frm.doc.money;

 // Calculate the count of the values in the childtable.
 var count_money = childtable.length;

 // Set the value of the docktype field.
 frm.set_value('count_money', count_money);
 }
});

frappe.ui.form.on('FamilyTable',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_fm=frm.doc.idcase
    frm.refresh_field('familymember')
}
});

frappe.ui.form.on('Pro1',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_pro1=frm.doc.idcase
    frm.refresh_field('type_date_v')
}
});

frappe.ui.form.on('Pro2',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_pro2=frm.doc.idcase
    frm.refresh_field('emergency_intervention')
}
});

frappe.ui.form.on('Ref',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_ref=frm.doc.idcase
    frm.refresh_field('referrals_table')
}
});

frappe.ui.form.on('Visit',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_visit=frm.doc.idcase
    frm.refresh_field('visits_table')
}
});

frappe.ui.form.on('money',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_money=frm.doc.idcase
    frm.refresh_field('money_table')
}
});

frappe.ui.form.on('Plan1',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_plan1=frm.doc.idcase
    frm.refresh_field('plan')
}
});


frappe.ui.form.on('Plan2',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_needs=frm.doc.idcase
    frm.refresh_field('needs')
}
});
