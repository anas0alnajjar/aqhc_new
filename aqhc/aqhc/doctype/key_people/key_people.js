// Copyright (c) 2023, anas and contributors
// For license information, please see license.txt

frappe.ui.form.on('keys',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.code_city=frm.doc.ccity
    frm.refresh_field('tb_keys')
}
});


frappe.ui.form.on('school',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.for_city=frm.doc.ccity
    frm.refresh_field('tb_school')
}
});