from PIL import Image
from resizeimage import resizeimage

# For square images
input_path_square_image = [
  './original/schedule-girl-1.PNG',
  './original/schedule-girl-2.PNG',
  './original/schedule-girl-3.PNG',
  './original/schedule-girl-4.PNG'
]
target_width_list_square = [150, 300, 400, 600]

# For rect images
input_path_rect_image = ['./original/hangout-girls.PNG']
target_width_list_rect = [150, 300, 400, 600]

def resize_image_by_width(original_img_path, width, reformatted_img_path):
  '''
  function to resize image by width. height will be resized in proportion to the original.
  Example call:
  resize_image_by_width('./original/schedule-girl-1.PNG', 200, './formatted/schedule-girl-1-200px.PNG')
  '''
  img = Image.open(original_img_path)
  img = resizeimage.resize_width(img, width)
  img.save(reformatted_img_path, img.format)
  print('Image formatted as {}'.format(reformatted_img_path))
  img.close()

def create_output_path(original_img_path, width, output_target_folder = '../img/front-page-img'):
  '''
  function to create complete output file path based on the target folder
  '''
  img_file = original_img_path.split('/')[-1].split('.')
  image_file_name = img_file[0] + '-width-' + str(width) + 'px.'+ (img_file[1]).lower()
  output_path = output_target_folder + '/' + image_file_name
  print(output_path)
  return output_path
  
def resize_all(input_img_list, target_width_list):
  for width in target_width_list:
    for img in input_img_list:
      output_path = create_output_path(img, width)
      resize_image_by_width(img, width, output_path)

def main():
  resize_all(input_path_square_image, target_width_list_square)
  resize_all(input_path_rect_image, target_width_list_rect)

# Execute
main()
