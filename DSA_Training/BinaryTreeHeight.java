import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
//alogorithm check
class TreeNode {
    int value;
    TreeNode left, right;
    TreeNode(int item) {
        value = item;
        left = right = null;
    }
}
public class BinaryTreeHeight {
    TreeNode root;
// Recursive method to calculate height
    int heightRecursive(TreeNode node) {
        if (node == null)
            return 0;
        else {
            int leftHeight = heightRecursive(node.left);
            int rightHeight = heightRecursive(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
// Iterative method to calculate height
    int heightIterative(TreeNode root) {
        if (root == null)
            return 0;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int height = 0;
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                if (node.left != null)
                    queue.add(node.left);
                if (node.right != null)
                    queue.add(node.right);
            }
            height++;
        }
        return height;
    }
// Method to insert nodes dynamically
    public TreeNode insertLevelOrder(int[] arr, TreeNode root, int i) {
        if (i < arr.length) {
            TreeNode temp = new TreeNode(arr[i]);
            root = temp;
            root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
            root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
        }
        return root;
    }
public static void main(String[] args) {
        BinaryTreeHeight tree = new BinaryTreeHeight();
        Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the number of nodes:");
        int n = scanner.nextInt();
        int[] nodes = new int[n];
    System.out.println("Enter the values of nodes (use -1 for null nodes):");
        for (int i = 0; i < n; i++) {
            nodes[i] = scanner.nextInt();
        }
    tree.root = tree.buildTreeFromLevelOrder(nodes);
    System.out.println("Height (Recursive): " + tree.heightRecursive(tree.root));
        System.out.println("Height (Iterative): " + tree.heightIterative(tree.root));
    }
    public TreeNode buildTreeFromLevelOrder(int[] nodes) {
        if (nodes.length == 0 || nodes[0] == -1) return null;
        TreeNode root = new TreeNode(nodes[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int i = 1;
        while (!queue.isEmpty() && i < nodes.length) {
            TreeNode current = queue.poll();
            if (nodes[i] != -1) {
                current.left = new TreeNode(nodes[i]);
                queue.add(current.left);
            }
            i++;
            if (i < nodes.length && nodes[i] != -1) {
                current.right = new TreeNode(nodes[i]);
                queue.add(current.right);
            }
            i++;
        }
        return root;
    }
}
