wit_bindgen_rust::export!("./interfaces/message.wit");
wit_bindgen_rust::import!("./interfaces/message_in.wit");
use crate::message::ObjData;

struct Message;

/*
    Expose say_hello and return_obj function
    when say_hello is called, execute jscall function provided by host
    and return string data
 */
impl message::Message for Message {
    fn say_hello() -> String {
        message_in::jscall("test");
        "Hello World".to_string()
    }
    fn return_obj() -> ObjData {
        ObjData {
            message: "my message".to_string(),
            data: "my data".to_string(),
        }
    }
}
