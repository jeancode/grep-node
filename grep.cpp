#include <iostream>
#include <string>
#include <windows.h>
using namespace std;

int main(){
	string data;
	bool programa = true;
	
	while(programa){
		cin>>data;
		if(data == "juan"){
			cout<<"Hola Juan"<<endl;
		
		}
		if(data == "exit"){
			programa = false;
		}	
	}
}
