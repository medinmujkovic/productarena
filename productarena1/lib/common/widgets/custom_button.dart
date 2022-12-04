import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallBack onTap;
  const CustomButton({super.key,required this.onTap, required this.text});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      child: Text(text, ),
      onPressed: ,
      style: ElevatedButton.styleFrom(
        minimumSize: const Size(double.infinity, 50),
      ),
    );
  }
}